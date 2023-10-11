import { map } from 'rxjs/operators';
import { LoginUser } from './../../models/LoginUser.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    console.log(this.credentials.email, this.credentials.password)
    this.authService
      .loginUser(this.credentials.email, this.credentials.password) 
      .pipe(map((data:LoginUser) => {
        localStorage.setItem('token', data.accessToken)
      }))
      .subscribe((data:any) => {
        this.router.navigateByUrl('/');
      },
        (error: any) => {
          console.error('Erro durante o login:', error);
        }
      );
  }
}
