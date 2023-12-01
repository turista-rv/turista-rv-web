import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampingRoutingModule } from './camping-routing.module';
import { CreateCampingComponent } from './create-camping/create-camping.component';


@NgModule({
  declarations: [
    CreateCampingComponent
  ],
  imports: [
    CommonModule,
    CampingRoutingModule
  ]
})
export class CampingModule { }
