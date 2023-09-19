import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api-olharlaser.onrender.com/api/users/login';

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  loginUser(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
