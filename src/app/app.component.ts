import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'TuristaRV';

  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    if (localStorage.getItem('keepLogged') === 'true') {
      this.AuthService.setIsLoggedIn();
      this.AuthService.refreshToken().subscribe((token) => {
        localStorage.setItem('token', token.accessToken);
        console.info('Token atualizado com sucesso');
      });
    }
  }
}
