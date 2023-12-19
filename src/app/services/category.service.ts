import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, TypeCategory } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _url = environment.URL_API + '/categories';

  constructor(private _http: HttpClient) {}

  listAll(): Observable<Category[]> {
    return this._http.get<Category[]>(this._url);
  }

  listByType(type: TypeCategory): Observable<Category[]> {
    return this._http.get<Category[]>(this._url + '/type/' + type);
  }

  create(category: Category): Observable<Category> {
    return this._http.post<Category>(this._url, category);
  }

  getById(id: string): Observable<Category> {
    return this._http.get<Category>(this._url + '/' + id);
  }

  update(category: Category): Observable<Category> {
    // formData.append('id', id);

    return this._http.put<Category>(this._url, category);
  }

  delete(id: string) {
    return this._http.delete<any>(this._url + '/' + id);
  }
}
