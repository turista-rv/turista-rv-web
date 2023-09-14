import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api-turistarv-0xio.onrender.com/api'; 

  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

 
}
