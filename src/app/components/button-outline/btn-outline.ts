import { Component, Input } from "@angular/core";

@Component({
	selector: "btn-outline",
	template: `<button
		class=" flex items-center gap-3 w-314 h-55 hover:border-blue-600 transition duration-300 
				ease-in-out rounded-lg justify-center border border-baseGray text-grays3 font-semibold"
				[ngClass]="{ 'mb-3': addMarginBottom }"
	>
		<ng-content></ng-content>
		{{ label }}
	</button> `,
	styles: [],
})
export class ButtonOutlineComponent {
	@Input() label!: string;
	@Input() addMarginBottom: boolean = false;
}