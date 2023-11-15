import { adminGuard } from './guards/admin.guard';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { CampingsComponent } from './views/campings/campings.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { HomeComponent } from './views/home/home.component';
import { HostessComponent } from './views/hostess/hostess.component';
import { LoginComponent } from './views/login/login.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { affiliateGuard } from './guards/affiliate.guard';
import { guestGuard } from './guards/guest.guard';
import { CreateCampingComponent } from './views/create-camping/create-camping.component';
import { CampingCheckoutComponent } from './views/camping-checkout/camping-checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'hostess',
    component: HostessComponent,
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'create-camping',
    component: CreateCampingComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'campings/:id',
    component: CampingsComponent,
  },
  {
    path: 'camping-checkout',
    component: CampingCheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
