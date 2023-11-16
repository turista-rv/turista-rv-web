import { Component } from '@angular/core';
import { Leads } from 'src/app/models/LeadsUser.model';
import { LeadsService } from 'src/app/services/leads.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
})
export class LeadsComponent {
  leads: Leads[] = [];

  constructor(private _leadsService: LeadsService) {}

  ngOnInit() {
    this._leadsService.listAll().subscribe((data) => {
      this.leads = data;
    });
  }

  delet(id: string | undefined) {}
}
