import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttractionRoutingModule } from './attraction-routing.module';
import { AttractionComponent } from './attraction/attraction.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { AttractionCategoryComponent } from './attraction-category/attraction-category.component';

@NgModule({
  declarations: [AttractionComponent, AttractionCategoryComponent],
  imports: [
    CommonModule,
    AttractionRoutingModule,
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
  ],
})
export class AttractionModule {}
