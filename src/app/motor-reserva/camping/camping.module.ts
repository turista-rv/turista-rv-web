import { SkeletonModule } from './../../components/skeleton/skeleton.module';
import { GalleriaModule } from 'primeng/galleria';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampingRoutingModule } from './camping-routing.module';
import { CampingComponent } from './camping/camping.component';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from '@coreui/angular';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [CampingComponent],
  imports: [
    CommonModule,
    CampingRoutingModule,
    MultiSelectModule,
    FormsModule,
    FileUploadModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    InputSwitchModule,
    CKEditorModule,
    GalleriaModule,
    SkeletonModule,
  ],
})
export class CampingModule {}
