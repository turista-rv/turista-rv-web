import { api } from './../../api';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoginUser, User } from './../models/LoginUser.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string | null;
  RefreshToken: string | null;
  user: LoginUser | null = null;

  private isLoggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> =
    this.isLoggedInSubject.asObservable();

  private refreshTokenInterval = 60000;

  public getIsLoggedInSubject(): BehaviorSubject<boolean> {
    return this.isLoggedInSubject;
  }

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    this.RefreshToken = localStorage.getItem('refreshToken');
    if (this.token) this.startTokenRefresh();
  }

  loginUser(email: string, password: string): Observable<LoginUser> {
    return this.http
      .post<LoginUser>(api.url + '/users/login', {
        email: email,
        password: password,
      })
      .pipe(
        map((data: LoginUser) => {
          this.isLoggedInSubject.next(true);
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
          return data;
        }),
        catchError((error: any) => {
          console.error('Erro durante o login:', error);
          throw error;
        })
      );
  }

  startTokenRefresh() {
    if (localStorage.getItem('keepLogged') !== 'true') {
      window.addEventListener('beforeunload', () => this.clearLocalStorage());
    }

    interval(this.refreshTokenInterval)
      .pipe(
        switchMap(() => this.refreshToken()) // Chama o método para atualizar o token
      )
      .subscribe(
        (token) => {
          localStorage.setItem('token', token.accessToken);
          console.info('Token atualizado com sucesso');
        },
        (error) => console.error('Erro ao atualizar o token', error)
      );
  }

  logoutUser(): void {
    this.clearLocalStorage();
    this.user = null;
    this.isLoggedInSubject.next(false);
    this.logout(this.RefreshToken as string);
  }

  logout(refreshToken: string) {
    const body = { refreshToken };
    return this.http.post<any>(api.url + 'users/logout', body).pipe(
      map((data: any) => {
        this.isLoggedInSubject.next(true);
        this.clearLocalStorage();
        return data;
      }),
      catchError((error: any) => {
        console.error('Erro durante o login:', error);
        throw error;
      })
    );
  }

  clearLocalStorage(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('keepLogged');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
  }

  setIsLoggedIn() {
    this.isLoggedInSubject.next(true);
  }

  verifyToken(token: string): Observable<boolean> {
    return this.http.get<boolean>(
      api.url + '/auth/verify-token?token=' + token
    );
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post<any>(api.url + '/users/refresh-token', {
      refreshToken: refreshToken,
    });
  }
}
