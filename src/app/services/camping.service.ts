import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camping } from '../models/camping.model';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/api';

@Injectable({
  providedIn: 'root',
})
export class CampingService {
  constructor(private http: HttpClient) {}

  listCampings(): Observable<Camping[]> {
    return this.http.get<Camping[]>(api.url + '/campings');
  }

  getById(id: string): Observable<Camping> {
    return this.http.get<Camping>(api.url + '/campings/' + id);
  }
}
