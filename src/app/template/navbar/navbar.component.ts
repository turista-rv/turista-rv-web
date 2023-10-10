import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private authService: AuthService,
    private router: Router
  ) { }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const menuElement = this.el.nativeElement.querySelector('#menuHamburguer');
    if (this.isMenuOpen) {
      // Se o menu estiver aberto, adicione a classe para posicionar abaixo do header
      this.renderer.addClass(menuElement, 'navbar-below-header');
    } else {
      // Se o menu estiver fechado, remova a classe
      this.renderer.removeClass(menuElement, 'navbar-below-header');
    }
  }
  logout(): void {
    const refreshToken = localStorage.getItem('refreshToken') as string;
    this.authService.logout(refreshToken).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('idUser');
        localStorage.removeItem('isAdmin');
        this.router.navigateByUrl('/login');
      });

    this.router.navigateByUrl('/login');
  }
}

// localStorage.removeItem('token');
// localStorage.removeItem('refreshToken');
// this.isLoggedIn = false;

// const x = localStorage.getItem('refreshToken')
// console.log(x)
// console.log('Tokens removidos: ', this.isLoggedIn);
