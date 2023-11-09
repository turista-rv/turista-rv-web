import { CanActivateFn } from '@angular/router';

export const affiliateGuard: CanActivateFn = (route, state) => {
  if (
    localStorage.getItem('role') === 'AFFILIATE' ||
    localStorage.getItem('role') === 'ADMIN'
  )
    return true;
  else return false;
};
