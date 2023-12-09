import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkeletonService {
  isLoading = false;

  constructor() {}

  start(): void {
    this.isLoading = true;
  }

  stop(): void {
    this.isLoading = false;
  }
}
