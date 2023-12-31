import { UserPanelComponent } from './views/user-panel/user-panel.component';
import { CampingBoxComponent } from './components/camping-box/camping-box.component';
import { CampingSearchComponent } from './views/camping-search/camping-search.component';
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
import { AppAdminComponent } from './motor-reserva/layout/app.admin.component';
import { ScheduleCheckoutComponent } from './views/schedule-checkout/schedule-checkout.component';

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
    path: 'motor-reservas',
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
    canActivate: [adminGuard],
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
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
  {
    path: 'camping-search',
    component: CampingSearchComponent,
  },
  {
    path: 'camping-box/:id',
    component: CampingBoxComponent,
  },
  {
    path: 'user-panel',
    component: UserPanelComponent,
  },
  {
    path: 'schedule-checkout',
    component: ScheduleCheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
