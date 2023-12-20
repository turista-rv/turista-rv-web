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
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { CampingCategoryComponent } from './camping-category/camping-category.component';

@NgModule({
  declarations: [CampingComponent, CampingCategoryComponent],
  imports: [
    CommonModule,
    CampingRoutingModule,
    MultiSelectModule,
    FormsModule,
    FileUploadModule,
    TableModule,
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
    DropdownModule,
    InputMaskModule,
  ],
})
export class CampingModule {}
