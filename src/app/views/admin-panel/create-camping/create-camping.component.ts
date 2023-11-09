import { Component, OnInit } from '@angular/core';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-create-camping',
  templateUrl: './create-camping.component.html',
  styleUrls: ['./create-camping.component.css'],
})
export class CreateCampingComponent implements OnInit {
  campings!: Camping[];
  camping: Camping = {
    active: true,
    name: '',
    propertyRules: '',
    images: [],
    description: '123tyeste',
  };

  image!: File;
  imgUrl: string[] = [];

  constructor(private campingService: CampingService) {}

  arquivoParaEnviar: File[] = [];

  ngOnInit(): void {
    this.campingService.listCampings().subscribe((data) => {
      this.campings = data;
    });
  }

  addFile() {
    this.arquivoParaEnviar?.push(this.image);
    console.log(this.arquivoParaEnviar);
    this.imgUrl.push(URL.createObjectURL(this.image));
  }

  onChangeArquivo(event: any) {
    console.log(event.target.files[0]);
    this.image = event.target.files[0];
  }

  submit() {
    const formData = new FormData();
    this.arquivoParaEnviar?.map((value) => {
      formData.append('images', value, value.name);
    });
    formData.append('name', this.camping.name); // Substitua pelos seus dados
    formData.append('propertyRules', this.camping.propertyRules); // Substitua pelos seus dados
    formData.append('description', this.camping.description ?? ''); // Substitua pelos seus dados
    formData.append('active', String(this.camping.active)); // Substitua pelos seus dados

    console.log(formData);
    this.campingService.create(formData).subscribe((data) => {
      console.log(data);
    });
  }

  delet(id: string | undefined) {
    this.campingService.delete(id as string);
  }
}
