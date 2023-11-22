import { AuthService } from './../../services/auth.service';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoginUser } from './../../models/LoginUser.model';
import { ToasterService } from 'src/app/services/toaster.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  keepLogged: boolean = false;
  isLoggedIn: boolean = false;
  passwordVisible = false;
  pointerType = false;

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private elementRef: ElementRef,
    private _toaster: ToasterService
  ) { }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (
      event.key === 'Enter' &&
      (event.target as HTMLElement).tagName !== 'BUTTON'
    ) {
      event.preventDefault();
      this.onSubmit();
    }
  }

  onSubmit() {
    this.AuthService.loginUser(
      this.credentials.email,
      this.credentials.password
    )
      .pipe(
        map((data: LoginUser) => {
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
          localStorage.setItem('role', data.user.role as string);
          if (this.keepLogged) localStorage.setItem('keepLogged', 'true');
        })
      )
      .subscribe({
        next: () => {
          this.isLoggedIn = true;
          this.router.navigateByUrl('/');
        },
        error: (error: any) => {
          this.AuthService.clearLocalStorage();
          const errorMessage = `${error}`;
          this._toaster.error(errorMessage);
        }
      });
  }

  onClickRevealPassword(event:MouseEvent) {
    event.preventDefault();
    // Prevent revealing the password when enter button is pressed.
  
      this.passwordVisible = !this.passwordVisible;
    
  }
}