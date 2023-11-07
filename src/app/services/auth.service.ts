import { api } from './../../api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginUser, User } from './../models/LoginUser.model';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = api.url + '/users';
 
  token: string | null;
  

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  public getIsLoggedInSubject(): BehaviorSubject<boolean> {
    return this.isLoggedInSubject;
  }

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  loginUser(email: string, password: string): Observable<LoginUser> {
    return this.http.post<LoginUser>(this.url + "/login", { email: email, password: password })
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

  updateRefreshToken(refreshToken: string) {
    // const token = localStorage.getItem('token');
    // console.log(refreshToken)
    // if(!token){
    //   throw new Error("token inválido!")
    // } 
    // const convertTokenToJSON = token;
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}`
    // });
    //const requestOptions = { headers: headers };
    return this.http.post<any>(this.url + "/logout", refreshToken)
    .pipe(
      map((data: any) => {
        console.log(data)
        this.isLoggedInSubject.next(true);
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
    localStorage.removeItem('idUser');
    localStorage.removeItem('isAdmin');
  }
}
