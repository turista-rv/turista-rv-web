import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() modalData: any; 
  @Output() onSubmit = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();

  preventClosing(event: Event): void {
    event.stopPropagation();
  }

  submitForm() {
    this.onSubmit.emit();
  }

  cancel() {
    this.onCancel.emit();
  }
}

@NgModule({
  imports: [
    // Import FormsModule here to use ngModel
    FormsModule,
  ],
})
export class ModalModule {}
