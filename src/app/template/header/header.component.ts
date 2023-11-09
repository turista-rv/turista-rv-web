import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedInSubject: BehaviorSubject<boolean>;
  isMenuOpen = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private AuthService: AuthService,
    private router: Router
  ) {
    this.isLoggedInSubject = this.AuthService.getIsLoggedInSubject();
    this.isLoggedInSubject.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
   }

  isLoggedIn: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const navElement = document.querySelector('nav'); // Selecionando o elemento nav
    if (navElement) {
      if (this.isMenuOpen) {
        navElement.classList.add('active');
      } else {
        navElement.classList.remove('active');
      }
    }
  }
  logout() {
    this.AuthService.logoutUser(); 
    this.router.navigateByUrl('/login');
  }
  
}
