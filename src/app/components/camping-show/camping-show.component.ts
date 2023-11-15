import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-camping-show',
  templateUrl: './camping-show.component.html',
  styleUrls: ['./camping-show.component.css'],
})
export class CampingShowComponent {
  campings: Camping[] = [
    {
      id: 'asdklhjadlkajwdel',
      active: true,
      name: 'Camping Pomerode',
      propertyRules: 'Regras do camping Pomerode',
      images: [
        {
          id: '1',
          url: 'https://img.freepik.com/fotos-gratis/vista-traseira-de-um-jovem-casal-de-mochileiros-sentado-para-relaxar-em-frente-a-barraca-perto-do-lago-com-um-conjunto-de-cafe-e-fazendo-um-moedor-de-cafe-fresco-durante-o-acampamento-nas-ferias-de-verao_1150-48396.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=sph',
        },
      ],
      description: 'Descrição do camping Pomerode',
    },
  ];
  constructor(private campingService: CampingService, private router: Router) {}

  ngOnInit(): void {
    this.campingService.listCampings().subscribe((data) => {
      console.log(data);
      // this.campings = data;
    });
  }

  redirectToCampingDetails(campingId: string): void {
    // Redirecione para a rota de detalhes do camping com o ID como parâmetro
    this.router.navigate(['/campings', campingId]);
  }
}
