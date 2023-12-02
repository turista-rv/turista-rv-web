import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampingComponent } from './create-camping/create-camping.component';

const routes: Routes = [
  {
    path: 'novo',
    component: CreateCampingComponent,
  },
  {
    path: '',
    redirectTo: 'novo',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampingRoutingModule {}
