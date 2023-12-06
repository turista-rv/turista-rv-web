import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() formData: any; // Seu modelo de dados para o formulário

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  private modalElementRef: ElementRef;

  // Propriedade para controlar a visibilidade do modal
  private _showModal: boolean = false;

  @Input()
  set showModal(value: boolean) {
    this._showModal = value;

    // Lógica adicional pode ser adicionada aqui, se necessário
  }

  get showModal(): boolean {
    return this._showModal;
  }

  constructor(private el: ElementRef) {
    this.modalElementRef = el;
  }

  submitForm() {
    this.onSubmit.emit(this.formData);
  }

  closeModal() {
    this.showModal = false;
  }

  @HostListener('document:click', ['$event'])
  closeModalOnClickOutside(event: Event): void {
    // Verifica se o clique foi fora do modal
    const isClickInsideModal = this.modalElementRef.nativeElement.contains(event.target);
    if (!isClickInsideModal) {
      // Lógica para fechar o modal
      this.closeModal();
    }
  }
  
}
