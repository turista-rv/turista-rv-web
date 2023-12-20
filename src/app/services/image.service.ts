import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image, ImageModel } from '../models/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private _url = environment.URL_API + '/images';

  constructor(private _http: HttpClient) {}

  listImages(): Observable<ImageModel[]> {
    return this._http.get<ImageModel[]>(this._url);
  }

  upload(formData: FormData): Observable<string> {
    return this._http.post<string>(this._url, formData);
  }

  delete(id: string): Observable<any> {
    return this._http.delete<any>(this._url + '/' + id);
  }
}
