import { CampingService } from 'src/app/services/camping.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camping-checkout',
  templateUrl: './camping-checkout.component.html',
  styleUrls: ['./camping-checkout.component.css']
})
export class CampingCheckoutComponent implements OnInit {
  campingName: string | null = null;
  campingPrice: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private CampingService: CampingService
  ) {}

   ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     this.campingName = params['name'];
  //     this.campingPrice = params['price'];
  //   });
   }

  finalizarReserva() {

    console.log('Reserva finalizada para o camping:', this.campingName);
    console.log('Preço do camping:', this.campingPrice);
  }
}
