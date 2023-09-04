import { Component, Input } from "@angular/core";

@Component({
  selector: "btn-filled",
  template: `<button
    class="flex items-center text-white rounded-lg gap-3 text-18  w-314 h-55 mb-3 bottom-2 bg-{{ customColor }} hover:bg-blue-600 transition duration-300 ease-in-out justify-center text-center font-bold"
    [ngClass]="customColor ? 'bg-' + customColor : 'bg-greenDark'"
  >
    <ng-content></ng-content>
    {{ label }}
  </button>`,
  styles: [],
})
export class ButtonFilledComponent {
  @Input() label!: string;
  @Input() customColor: string | undefined;
}
