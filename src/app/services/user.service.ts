import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private apiUrl = 'https://api-turistarv-0xio.onrender.com/api/users';

  constructor( private http: HttpClient) {}



//   load(): Observable<User[]> {
//     return this.http.get<User[]>(
//       this.url + '/' + localStorage.getItem('idCompany')
//     );
//   }

//   getByIdCompany(): Observable<User[]> {
//     return this.http.get<User[]>(
//       this.url + '/company/' + localStorage.getItem('idCompany')
//     );
//   }

//   create(employee: User): Observable<User> {
//     return this.http.post<User>(this.url, employee);
//   }

//   update(employee: User): Observable<User> {
//     return this.http.put<User>(`${this.url}/${employee._id}`, employee);
//   }

//   getById(id: string): Observable<User> {
//     return this.http.get<User>(`${this.url}/${id}`);
//   }

//   delete(id: string): Observable<User> {
//     return this.http.delete<User>(`${this.url}/${id}`);
//   }

  formatPhoneNumber(phone: string): string {
    return `${phone.slice(0, 2)}-${phone.slice(2, 7)}-${phone.slice(7)}`;
  }
}