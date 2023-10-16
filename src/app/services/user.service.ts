import { map, catchError } from 'rxjs/operators';
import { User } from './../models/LoginUser.model';
import { Observable } from 'rxjs';
import { api } from './../../api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = api.url + '/users';

  constructor( private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(this.url, user).pipe(
      map((response: any) => response), // Mapeia a resposta para retorná-la diretamente
      catchError((error: any) => {
        alert(error);
        throw error; 
      })
    );
  }

  formatPhoneNumber(phone: string): string {
    return `${phone.slice(0, 2)}-${phone.slice(2, 7)}-${phone.slice(7)}`;
  }
}