import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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
    private AuthService: AuthService
  ) {
    this.isLoggedInSubject = this.AuthService.getIsLoggedInSubject();
    this.isLoggedInSubject.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  isLoggedIn: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const menuElement = this.el.nativeElement.querySelector('#menuHamburguer');
    if (this.isMenuOpen) {
      this.renderer.addClass(menuElement, 'navbar-below-header');
    } else {
      this.renderer.removeClass(menuElement, 'navbar-below-header');
    }
  }

  //   logout(): void {
  //   const refreshToken = localStorage.getItem('refreshToken');
  //   if (refreshToken) {
  //     this.authService.updateRefreshToken(refreshToken).subscribe(
  //       () => {
  //         this.authService.clearLocalStorage();
  //         this.authService.getIsLoggedInSubject().next(false);
  //         this.router.navigateByUrl('/login');
  //       },
  //       (error: any) => {
  //         console.error('Erro durante o logout:', error);
  //       }
  //     );
  //   } else {
  //     console.error('Refresh token não encontrado.');
  //   }
  // }
  logout(): void {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error("token inválido!")
    }
    this.AuthService.updateRefreshToken(refreshToken)
      // this.AuthService.updateRefreshToken(refreshToken).subscribe(data => {
      //   console.log(data)
      // })
      // .pipe(map((data: any) => {
      //   console.log(data)
      // }))
      .subscribe((data: any) => {
        console.log(data)
      },


        (error: any) => {
          alert(error.message);
        });
  }
}