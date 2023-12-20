import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  items: MenuItem[] = [];
  isEditing: { [key: string]: boolean } = {};
  isSaving: { [key: string]: boolean } = {};

  constructor() {
    this.initializeMenuItems();
    this.initializeEditingState();
  }

  ngOnInit() {}

  private initializeMenuItems() {
    this.items = [
      {
        label: 'Detalhes da Conta',
        icon: 'pi pi-fw pi-user',
        routerLink: '/user-panel/account-details',
      },
      {
        label: 'Métodos de Pagamento',
        icon: 'pi pi-fw pi-credit-card',
        routerLink: '/user-panel/payment-methods',
      },
      {
        label: 'Reservas',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/user-panel/reservations',
      },
      {
        label: 'Salvos',
        icon: 'pi pi-fw pi-heart',
        routerLink: '/user-panel/saved',
      },
    ];
  }

  private initializeEditingState() {
    this.items.forEach(item => {
      if (item.label) {
        this.isEditing[item.label] = false;
        this.isSaving[item.label] = false;
      }
    });
  }

  toggleEditing(section: string) {
    if (this.isEditing[section] !== undefined) {
      this.isEditing[section] = !this.isEditing[section];
    }
  }

  saveChanges(section: string) {
    // Lógica para salvar as alterações
    this.isSaving[section] = false;
    this.isEditing[section] = false;
  }

  cancelChanges(section: string) {
    // Lógica para cancelar as alterações
    this.isSaving[section] = false;
    this.isEditing[section] = false;
  }

  isCardEditing(section: string): boolean {
    return this.isEditing[section] || this.isSaving[section];
  }
}
