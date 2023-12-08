import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';
import { RULES, IRules } from './../../utils/rules-enum';

@Component({
  selector: 'app-campings',
  templateUrl: './campings.component.html',
  styleUrls: ['./campings.component.css'],
})
export class CampingsComponent implements OnInit {
  camping!: Camping;
  id: string | null = null;
  dataEntrada!: Date;
  selectionDate!: any;
  dataSaida!: Date;
  tipoVeiculo!: string;
  visible = false;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  get getRules(): IRules[] {
    const rules = this.camping.propertyRules.split(',');
    return RULES.filter((r) => rules.includes(r.code));
  }

  constructor(
    private route: ActivatedRoute,
    private campingService: CampingService
  ) { }

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
    console.log("sendMessageWhatsapp ativado")
    const range = this.range.value;
    if (range.start && range.end) {
      const dataIni = `${range.start.getDate()}/${range.start.getMonth() + 1}/${range.start.getFullYear()}`;
      const dataFim = `${range.end.getDate()}/${range.end.getMonth() + 1}/${range.end.getFullYear()}`;
      const campingName = this.camping.name || '';
      const mensagemWhatsapp = `Olá, gostaria de fazer uma reserva para ${campingName} de ${dataIni} até ${dataFim}!`;

      window.open(
        `http://wa.me/554733719046?text=${encodeURIComponent(
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

  onSelectDate(event: any) {
    this.dataEntrada = this.selectionDate[0];
    this.dataSaida = this.selectionDate[1];
    this.range.setValue({
      start: this.dataEntrada,
      end: this.dataSaida,
    });

  }

  verificarDisponibilidade(): void {
    console.log(this.dataEntrada, this.dataSaida);
  }

  getFormatedDate(date: Date): string {
    return `${date.getDate().toString().padStart(2, '0')}/${date.getMonth() + 1
      }/${date.getFullYear()}`;
  }
}
