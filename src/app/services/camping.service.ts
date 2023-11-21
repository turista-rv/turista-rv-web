import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/api';
import { Camping } from '../models/camping.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CampingService {
  constructor(private http: HttpClient) {}

  listCampings(): Observable<Camping[]> {
    return this.http.get<Camping[]>(environment.URL_API + '/campings');
  }

  getById(id: string): Observable<Camping> {
    return this.http.get<Camping>(environment.URL_API + '/campings/' + id);
  }

  create(formData: FormData): Observable<Camping> {
    return this.http.post<Camping>(environment.URL_API + '/campings', formData);
  }

  delete(id: string) {
    return this.http.delete<any>(environment.URL_API + '/campings/' + id);
  }
}
