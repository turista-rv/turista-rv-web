import { LocaleService } from 'src/app/services/locale-service';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;
  isLoggedInSubject: BehaviorSubject<boolean>;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private AuthService: AuthService,
    private localeService: LocaleService
  ) {
    this.isLoggedInSubject = this.AuthService.getIsLoggedInSubject();
    this.isLoggedInSubject.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  isLoggedIn: boolean = false;
  selectedLanguage = 'en'; 

  isLanguageSelected(language: string): boolean {
    return this.selectedLanguage === language;
  }
  
  changeLanguage(language: string) {
    this.selectedLanguage = language;

    // Mudar o idioma do calendário PrimeNG usando o LocaleService
    if (language === 'en') {
      this.localeService.setLocale('en');
    } else if (language === 'pt') {
      this.localeService.setLocale('pt');
    } else if (language === 'es') {
      this.localeService.setLocale('es');
    }
  }

  logout() {
    this.AuthService.logoutUser();
    this.router.navigateByUrl('/');
  }

  
}
