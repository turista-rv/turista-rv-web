
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from "./views/home/home.component";

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
