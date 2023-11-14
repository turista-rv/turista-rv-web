import { Component } from '@angular/core';
import { ToasterService } from './toaster.service';

@Component({
  selector: 'app-toater',
  templateUrl: './toater.component.html',
  styleUrls: ['./toater.component.css'],
})
export class ToaterComponent {
  constructor(public toasterService: ToasterService) {}
}
