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
    private AuthService: AuthService
  ) {
    this.isLoggedInSubject = this.AuthService.getIsLoggedInSubject();
    this.isLoggedInSubject.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  isLoggedIn: boolean = false;



  logout() {
    this.AuthService.logoutUser();
    this.router.navigateByUrl('/');
  }

  
}
