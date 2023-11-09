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
    canActivate: [guestGuard],
  },
  {
    path: 'campings/:id',
    component: CampingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
