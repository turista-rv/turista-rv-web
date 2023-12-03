import { MultiSelectModule } from 'primeng/multiselect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampingRoutingModule } from './camping-routing.module';
import { CampingComponent } from './camping/camping.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CampingComponent],
  imports: [CommonModule, CampingRoutingModule, MultiSelectModule, FormsModule],
})
export class CampingModule {}
