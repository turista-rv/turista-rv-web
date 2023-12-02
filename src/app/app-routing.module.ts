import { CampingRulesComponent } from './views/rules-politics/camping-rules/camping-rules.component';
import { CampingPoliticsComponent } from './views/rules-politics/camping-politics/camping-politics.component';
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
import { CampingCheckoutComponent } from './views/camping-checkout/camping-checkout.component';
import { CreateCampingComponent } from './motor-reserva/camping/create-camping/create-camping.component';
import { AppAdminComponent } from './motor-reserva/layout/app.admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'create-account',
  //   component: CreateAccountComponent,
  // },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'hostess',
    component: HostessComponent,
  },
  {
    path: 'admin',
    component: AppAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./motor-reserva/motor-reserva.module').then(
            (m) => m.MotorReservaModule
          ),
      },
    ],
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
  {
    path: 'camping-rules',
    component: CampingRulesComponent,
  },
  {
    path: 'camping-politics',
    component: CampingPoliticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
