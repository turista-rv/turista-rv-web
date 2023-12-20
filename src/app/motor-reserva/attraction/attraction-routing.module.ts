import { AttractionComponent } from './attraction/attraction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractionCategoryComponent } from './attraction-category/attraction-category.component';

const routes: Routes = [
  { path: '', component: AttractionComponent },
  { path: 'categories', component: AttractionCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttractionRoutingModule {}
