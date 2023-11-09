import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { api } from './../../api';
import { LoginUser } from './../models/LoginUser.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = api.url + '/users';

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
      .post<LoginUser>(this.url + '/login', {
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
  // `${this.url}/logout`

  logout(refreshToken: string) {
    const body = {
      refreshToken: refreshToken,
    };
    return this.http.post<any>(this.url + '/logout', body);
  }

  clearLocalStorage(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('idUser');
    localStorage.removeItem('isAdmin');
  }
}
