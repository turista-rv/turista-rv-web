import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router para redirecionar após o login
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

    this.authService
      .loginUser(this.credentials)
      .subscribe((userLogged) => {
        if (userLogged) {
          localStorage.setItem('token', userLogged.accessToken);
          localStorage.setItem('idUser', userLogged.user.id as string);

          this.router.navigateByUrl('/');
          console.error(userLogged);
        } else {
          console.error('Email ou senha incorretos.');
        }
      });
  }
}
