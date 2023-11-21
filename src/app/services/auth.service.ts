import { api } from './../../api';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginUser, User } from './../models/LoginUser.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string | null;

  private isLoggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> =
    this.isLoggedInSubject.asObservable();

  public getIsLoggedInSubject(): BehaviorSubject<boolean> {
    return this.isLoggedInSubject;
  }

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  loginUser(email: string, password: string): Observable<LoginUser> {
    return this.http
      .post<LoginUser>(environment.URL_API + '/users/login', {
        email: email,
        password: password,
      })
      .pipe(
        map((data: LoginUser) => {
          this.isLoggedInSubject.next(true);
          return data;
        }),
        catchError((error: any) => {
          console.error('Erro durante o login:', error);
          throw error;
        })
      );
  }

  logoutUser(): void {
    this.clearLocalStorage();
    this.isLoggedInSubject.next(false);
  }

  updateRefreshToken(refreshToken: string) {
    const body = { refreshToken };
    return this.http.post<any>(environment.URL_API + 'users/logout', body).pipe(
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
  }

  setIsLoggedIn() {
    this.isLoggedInSubject.next(true);
  }
}
