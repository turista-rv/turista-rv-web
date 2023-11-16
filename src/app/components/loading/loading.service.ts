import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loading: boolean = false;

  constructor() {}

  start() {
    this.loading = true;
  }

  stop() {
    this.loading = false;
  }
}
