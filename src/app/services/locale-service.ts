import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import localePt from '@angular/common/locales/pt';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  setLocale(language: string): void {
    let localeData: any;

    switch (language) {
      case 'en':
        localeData = localeEn;
        break;
      case 'es':
        localeData = localeEs;
        break;
      case 'pt':
        localeData = localePt;
        break;

      default:
        //linguagem padrão
        localeData = localePt;
        break;
    }

    registerLocaleData(localeData);
  }
}
