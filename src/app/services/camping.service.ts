import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/api';
import { Camping } from '../models/camping.model';

@Injectable({
  providedIn: 'root',
})
export class CampingService {
  constructor(private http: HttpClient) {}

  create(formData: FormData): Observable<Camping> {
    return this.http.post<Camping>(api.url + '/campings', formData);
  }

  listCampings(): Observable<Camping[]> {
    return this.http.get<Camping[]>(api.url + '/campings');
  }

  getById(id: string): Observable<Camping> {
    return this.http.get<Camping>(api.url + '/campings/' + id);
  }
  
  update(formData: FormData): Observable<Camping> {
    // formData.append('id', id);
   
    return this.http.put<Camping>(api.url + '/campings', formData);
  }

  delete(id: string) {
    return this.http.delete<any>(api.url + '/campings/' + id);
  }
}
