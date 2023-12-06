import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from './loading.service';
import { LoadingComponent } from './loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  providers: [LoadingService],
  exports: [LoadingComponent],
})
export class LoadingModule {}
