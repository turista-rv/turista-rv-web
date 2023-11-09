import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class guestGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      localStorage.getItem('role') === 'GUEST' ||
      localStorage.getItem('role') === 'AFFILIATE' ||
      localStorage.getItem('role') === 'ADMIN'
    ) {
      // O usuário está autenticado, permitir o acesso
      return true;
    } else {
      // O usuário não está autenticado, redirecionar para a página de login
      return this.router.navigate(['/']);
    }
  }
}
