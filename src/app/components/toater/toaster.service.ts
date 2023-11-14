import { Injectable } from '@angular/core';

export interface ToasterModel {
  title: string;
  msg: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  toasts: ToasterModel[] = [];

  constructor() {}

  success(toast: ToasterModel) {
    this.toasts.push(toast);
  }
}
