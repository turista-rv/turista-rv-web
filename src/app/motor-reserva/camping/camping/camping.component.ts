import { Component } from '@angular/core';

interface Rule {
  name: string;
  code: string;
  icon: string;
}

@Component({
  selector: 'app-camping',
  templateUrl: './camping.component.html',
  styleUrls: ['./camping.component.css'],
})
export class CampingComponent {
  rules: Rule[] = [
    { name: 'Banheiro', icon: 'fa-toilet', code: 'BAN' },
    { name: 'Chuveiro com água quente', icon: 'fa-shower', code: 'CHV' },
    { name: 'Água', icon: 'fa-tint', code: 'AGU' },
    { name: 'Eletricidade', icon: 'fa-plug', code: 'ELE' },
    { name: 'Local para descarte de detrito', icon: 'fa-trash', code: 'LDD' },
  ];
  selectedMulti: Rule[] = [];
}
