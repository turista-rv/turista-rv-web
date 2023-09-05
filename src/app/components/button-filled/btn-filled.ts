import { Component, Input } from "@angular/core";

@Component({
  selector: "btn-filled",
  template: `<button
    class="flex items-center text-white rounded-lg gap-3 text-18 w-314 h-55 
           {{ customColor ? 'bg-' + customColor : 'bg-greenDark' }} hover:brightness-110
           transition duration-300 ease-in-out justify-center text-center font-bold"
  >
    <ng-content></ng-content>
    {{ label }}
  </button>`,
  styles: [],
})
export class ButtonFilledComponent {
  @Input() customColor: string | undefined;
  @Input() label!: string;
  @Input() addMarginBottom: boolean = false;
}
