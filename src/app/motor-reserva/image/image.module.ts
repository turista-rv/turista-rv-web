import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRoutingModule } from './image-routing.module';
import { ImageComponent } from './image/image.component';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { ImageModule as ImagePrimeModule } from 'primeng/image';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'src/app/components/skeleton/skeleton.module';

@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
    ImageRoutingModule,
    FormsModule,
    FileUploadModule,
    ImagePrimeModule,
    PaginatorModule,
    SkeletonModule,
  ],
})
export class ImageModule {}
