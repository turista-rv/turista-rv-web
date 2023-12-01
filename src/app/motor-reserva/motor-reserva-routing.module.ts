import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateCampingComponent } from './camping/create-camping/create-camping.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CreateCampingComponent,
      },
      {
        path: 'campings',
        loadChildren: () =>
          import('./camping/camping.module').then((m) => m.CampingModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class MotorReservaRoutingModule {}
