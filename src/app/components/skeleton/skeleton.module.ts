import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { SkeletonService } from './skeleton.service';
import { SkeletonModule as SkeletonModulePrime } from 'primeng/skeleton';

@NgModule({
  declarations: [SkeletonComponent],
  imports: [CommonModule, SkeletonModulePrime],
  exports: [SkeletonComponent],
  providers: [SkeletonService],
})
export class SkeletonModule {}
