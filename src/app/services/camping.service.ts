import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { api } from 'src/api';
import { Camping } from '../models/camping.model';

@Injectable({
  providedIn: 'root',
})
export class CampingService {
  constructor(private http: HttpClient) {}

  create(camping: Camping): Observable<Camping> {
    return this.http.post<Camping>(api.url + '/campings', camping);
  }

  listCampings(): Observable<Camping[]> {
    return this.http.get<Camping[]>(api.url + '/campings');
  }

  getById(id: string): Observable<Camping> {
    return this.http.get<Camping>(api.url + '/campings/' + id);
  }

  update(camping: Camping): Observable<Camping> {
    return this.http.put<Camping>(api.url + '/campings', camping);
  }

  delete(id: string) {
    return this.http.delete<any>(api.url + '/campings/' + id);
  }

  deleteMultiple(ids: string[]): Observable<any> {
    const deleteRequests: Observable<any>[] = [];

    ids.forEach((id) => {
      const deleteRequest = this.http.delete<any>(api.url + '/campings/' + id);
      deleteRequests.push(deleteRequest);
    });

    // Use forkJoin para combinar várias solicitações de exclusão
    return forkJoin(deleteRequests);
  }

  imageDelete(id: string) {
    return this.http.delete<any>(api.url + '/images-camping/' + id);
  }

  areaImageDelete(id: string) {
    return this.http.delete<any>(api.url + '/campings/image-area' + id);
  }

  downloadImage(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }

  imcrementClick(id: string): Observable<any> {
    return this.http.patch(api.url + '/campings/click/' + id, {});
  }

  listActives(): Observable<Camping[]> {
    return this.http.get<Camping[]>(api.url + '/campings/actives');
  }

  listByCategory(id: string): Observable<Camping[]> {
    return this.http.get<Camping[]>(
      api.url + '/campings/actives/category/' + id
    );
  }
}
