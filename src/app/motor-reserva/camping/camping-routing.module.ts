import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampingComponent } from './camping/camping.component';
import { CampingCategoryComponent } from './camping-category/camping-category.component';

const routes: Routes = [
  {
    path: '',
    component: CampingComponent,
  },
  {
    path: 'categories',
    component: CampingCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampingRoutingModule {}
