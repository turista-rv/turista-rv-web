import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface ToasterModel {
  title: string;
  msg: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  toasts: ToasterModel[] = [];

  constructor(private _snackbar: MatSnackBar) {}

  success(msg: string) {
    this._snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'success-snackbar',
    });
  }

  warning(msg: string) {
    this._snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'warning-snackbar',
    });
  }

  error(msg: string) {
    this._snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'error-snackbar',
    });
  }
}
