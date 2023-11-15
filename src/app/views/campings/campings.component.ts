import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-campings',
  templateUrl: './campings.component.html',
  styleUrls: ['./campings.component.css'],
})
export class CampingsComponent implements OnInit {
  camping: Camping = {
    active: true,
    name: 'Camping Pomerode',
    propertyRules: 'Regras do camping Pomerode',
    images: [
      {
        id: '1',
        url: 'https://img.freepik.com/fotos-gratis/vista-traseira-de-um-jovem-casal-de-mochileiros-sentado-para-relaxar-em-frente-a-barraca-perto-do-lago-com-um-conjunto-de-cafe-e-fazendo-um-moedor-de-cafe-fresco-durante-o-acampamento-nas-ferias-de-verao_1150-48396.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=sph',
      },
      {
        id: '2',
        url: 'https://media.gettyimages.com/id/1358799033/pt/foto/couple-building-tent-in-forest-during-hike.jpg?s=612x612&w=gi&k=20&c=O9PLVYvJ3WPu13Kidzal13oUAbcgwMqT0r5r_xxqfI0=',
      },
    ],
    description: 'Descrição do camping Pomerode',
  };
  id: string | null = null;

  public Editor = ClassicEditor;

  constructor(
    private route: ActivatedRoute,
    private campingService: CampingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    // if (this.id)
    //   this.campingService.listCampings().subscribe((data) => {
    //     let camping = data.filter((value) => value.id === this.id);
    //     this.camping = camping[0];
    //   });
  }
}
