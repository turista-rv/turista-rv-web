import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div [style.width]="width" [style.height]="height">
      <div class="animate-pulse bg-gradient-to-r from-zinc-700 w-full h-full">
        <div class="flex h-full justify-center items-center font-bold">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class LoadingComponent implements OnInit {
  constructor() {}

  @Input() width: string = '100px';
  @Input() height: string = '50px';

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.width = '100px';
    this.height = '50px';
  }
}
