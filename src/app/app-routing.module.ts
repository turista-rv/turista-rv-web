import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { HostessComponent } from './views/hostess/hostess.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from "./views/home/home.component";

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "create-account",
    component: CreateAccountComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "hostess",
    component: HostessComponent,
  },
  {
    path: "admin-panel",
    component: AdminPanelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
