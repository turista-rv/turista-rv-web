import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxTypeComponent } from './box-type/box-type.component';
import { BoxComponent } from './box/box.component';

const routes: Routes = [
  { path: 'box-types', component: BoxTypeComponent },
  { path: 'boxes', component: BoxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxRoutingModule {}
