import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoxType } from '../models/box-type.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BoxTypeService {
  private _url = environment.URL_API + '/box-types';

  constructor(private _http: HttpClient) {}

  list(): Observable<BoxType[]> {
    return this._http.get<BoxType[]>(this._url);
  }

  create(boxType: BoxType) {
    return this._http.post<BoxType>(this._url, boxType);
  }

  delete(id: string) {
    return this._http.delete<any>(this._url + '/' + id);
  }

  update(boxType: BoxType) {
    return this._http.put<BoxType>(this._url, boxType);
  }
}
