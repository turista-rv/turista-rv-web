import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from 'primeng/api';

export interface ToasterModel {
  title: string;
  msg: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  toasts: ToasterModel[] = [];

  constructor(private service: MessageService) {}

  success(msg: string) {
    this.service.add({
      key: 'tst',
      severity: 'success',
      summary: '',
      detail: msg,
    });
  }

  warning(msg: string) {
    this.service.add({
      key: 'tst',
      severity: 'warn',
      summary: '',
      detail: msg,
    });
  }

  error(msg: string) {
    this.service.add({
      key: 'tst',
      severity: 'error',
      summary: '',
      detail: msg,
    });
  }
}
