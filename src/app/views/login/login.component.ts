import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoginUser } from './../../models/LoginUser.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter' && (event.target as HTMLElement).tagName !== 'BUTTON') {
      event.preventDefault();
      this.onSubmit();
    }
  }

  onSubmit() {
    this.authService
      .loginUser(this.credentials.email, this.credentials.password)
      .pipe(map((data: LoginUser) => {
        localStorage.setItem('token', data.accessToken);
      }))
      .subscribe((data: any) => {
        this.isLoggedIn = true;
        this.router.navigateByUrl('/');
      },
      (error: any) => {
        console.error('Erro durante o login:', error);
      });
  }
}
