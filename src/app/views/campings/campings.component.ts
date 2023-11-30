import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  camping!: Camping;
  id: string | null = null;
  dataEntrada: Date = new Date();
  dataSaida: Date = new Date();

  public Editor = ClassicEditor;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(
    private route: ActivatedRoute,
    private campingService: CampingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    if (this.id)
      this.campingService.listCampings().subscribe((data) => {
        let camping = data.filter((value) => value.id === this.id);
        this.camping = camping[0];
      });
  }

  sendMessageWhatsapp() {
    const range = this.range.value;
    if (range.start && range.end) {
      const dataIni = `${range.start.getDate()}/${
        range.start.getMonth() + 1
      }/${range.start.getFullYear()}`;
      const dataFim = `${range.end.getDate()}/${
        range.end.getMonth() + 1
      }/${range.end.getFullYear()}`;
      const mensagemWhatsapp = `Olá, gostaria de fazer uma reserva para de ${dataIni} até ${dataFim}!`;

      window.open(
        `http://wa.me/5553999356737?text=${encodeURIComponent(
          mensagemWhatsapp
        )}`,
        '_blank'
      );
    }
  }

  myFilter = (d: Date | null): boolean => {
    const currentDate = new Date();
    return !d || d >= currentDate;
  };

  
}
