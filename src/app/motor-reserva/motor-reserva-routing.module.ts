import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'campings',
        loadChildren: () =>
          import('./camping/camping.module').then((m) => m.CampingModule),
      },
      {
        path: 'box',
        loadChildren: () => import('./box/box.module').then((m) => m.BoxModule),
      },
      {
        path: 'reservas',
        loadChildren: () =>
          import('./reservas/reservas.module').then((m) => m.ReservasModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class MotorReservaRoutingModule {}
