import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isMenuOpen = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private authService: AuthService,
    private router: Router
  ) {}

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
    const refreshToken = localStorage.getItem('refreshToken') as string
    this.authService.logout('refreshToken');
    const x =  this.authService.logout('refreshToken');
    console.log('Logout realizado: ', x);
    this.router.navigateByUrl('/login');
  }
}
