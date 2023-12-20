import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-camping-box',
  templateUrl: './camping-box.component.html',
  styleUrls: ['./camping-box.component.css']
})
export class CampingBoxComponent implements OnInit {
  campingId: string = '';
  campingDetails: any;
  //selectedDate: Date; 

  constructor(
    private route: ActivatedRoute,
    private campingService: CampingService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.campingId = params.get('id') || '';
      this.loadCampingDetails();
    });
  }

  loadCampingDetails(): void {
    if (this.campingId) {
      this.campingService.getById(this.campingId).subscribe((details: any) => {
        this.campingDetails = details;
      });
    }
  }

  //onDateSelected(date: Date): void {
   // this.selectedDate = date;
    // const dataIni = `${range.start.getDate()}/${range.start.getMonth() + 1}/${range.start.getFullYear()}`;
    // const dataFim = `${range.end.getDate()}/${range.end.getMonth() + 1}/${range.end.getFullYear()}`;
  //}
}
