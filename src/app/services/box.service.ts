import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BoxType } from '../models/box-type.model';
import { Box } from '../models/box.model';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  private _url = environment.URL_API + '/boxes';

  constructor(private _http: HttpClient) {}

  list(): Observable<Box[]> {
    return this._http.get<Box[]>(this._url);
  }

  listByIdCamping(idCamping: string): Observable<Box[]> {
    return this._http.get<Box[]>(this._url + '/camping/' + idCamping);
  }

  create(box: Box) {
    return this._http.post<Box>(this._url, box);
  }

  delete(id: string) {
    return this._http.delete<any>(this._url + '/' + id);
  }

  update(box: Box) {
    return this._http.put<Box>(this._url, box);
  }
}
