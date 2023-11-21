import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LeadsUser } from '../models/LeadsUser.model';
import { api } from './../../api';
import { Leads } from './../models/LeadsUser.model';

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  url = api.url + '/leads';

  constructor(private http: HttpClient) {}

  sendLeads(leads: Leads): Observable<any> {
    return this.http.post<LeadsUser>(api.url, leads).pipe(
      map((response: any) => response),
      catchError((error: any) => {
        console.error('Erro ao enviar leads:', error);
        throw error;
      })
    );
  }

  listAll() {
    return this.http.get<Leads[]>(api.url);
  }
}
