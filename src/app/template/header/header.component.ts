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
  ) { }

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
  logout(): void {
    console.log("ta clicando header!")
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      this.authService.updateRefreshToken(refreshToken).subscribe(
        (data: any) => {
          console.log("Fabi Here")
          this.authService.clearLocalStorage(); 
          this.router.navigateByUrl('/login'); 
          console.log('Logout bem-sucedido:', data);

          this.isLoggedIn = false;
          this.authService.clearLocalStorage();
          this.router.navigateByUrl('/login');
         
          console.log(data)
  
        },
        (error: any) => {
          console.error('Erro durante o logout:', error);
        }
      );
    } else {
      console.error('Refresh token não encontrado.');
    }
  }
  
}
