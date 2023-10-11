import { api } from './../../api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginUser, User } from './../models/LoginUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = api.url + '/users';
  token: string | null;
  

  private _isLoggedIn: boolean = false;
  
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  loginUser(email: string, password: string): Observable<LoginUser> {
    return this.http
      .post<LoginUser>(this.url + "/login", { email: email, password: password })
      
  }
// Generated by https://quicktype.io
  

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(this.url, user).pipe(
      map((response: any) => response), // Mapeia a resposta para retorná-la diretamente
      catchError((error: any) => {
        alert(error);
        console.error('Erro ao registrar usuário:', error);
        throw error; 
      })
    );
  }

  logout(refreshToken: string): Observable<any> {
    return this.http.post<any>(this.url, { refreshToken }).pipe(
      catchError((error: any) => {
        console.error('Erro durante o logout:', error);
        throw error; 
      })
    );
  }

  getToken(): string {
    return this.token as string;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  clearToken(): void {
    localStorage.removeItem('token');
    this.token = null;
  }

  setLoggedIn(): void {
    this._isLoggedIn = true;
  }

  setLoggedOut(): void {
    this._isLoggedIn = false;
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  
}
