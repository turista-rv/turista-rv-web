import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('role') === 'ADMIN') return true;
  else return false;
};
