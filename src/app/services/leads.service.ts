import { Leads } from './../models/LeadsUser.model';
import { api } from './../../api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LeadsUser } from '../models/LeadsUser.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  url = api.url + '/leads';

  constructor(private http: HttpClient) {}

  sendLeads(leads: Leads): Observable<any> {
    return this.http.post<LeadsUser>(environment.URL_API, leads).pipe(
      map((response: any) => response),
      catchError((error: any) => {
        console.error('Erro ao enviar leads:', error);
        throw error;
      })
    );
  }

  listAll() {
    return this.http.get<Leads[]>(environment.URL_API);
  }
}
