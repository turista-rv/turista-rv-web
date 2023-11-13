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
  loading = true;
  selectedFileName: string = '';

  constructor(private campingService: CampingService) { }

  arquivoParaEnviar: File[] = [];

  ngOnInit(): void {
    this.campingService.listCampings()
    .subscribe({
      next:(data) => {
        this.campings = data;
        this.loading = false;
      },
    }),
      (error:any) => {
        console.error(error);
        this.loading = false; // Finaliza o loading em caso de erro
      };
  }

  addFile() {
    this.arquivoParaEnviar?.push(this.image);
    console.log(this.arquivoParaEnviar);
    this.imgUrl.push(URL.createObjectURL(this.image));
  }

  onChangeArquivo(event: any) {
    console.log(event.target.files[0]);
    this.image = event.target.files[0];
    const fileInput = event.target as HTMLInputElement;
  if (fileInput.files && fileInput.files.length > 0) {
    this.selectedFileName = fileInput.files[0].name;
  } else {
    this.selectedFileName = '';
  }
}
  

  submit() {
    const formData = new FormData();
    this.campingService.create(formData).subscribe({
      next: (data) => {
        console.log(data);
        alert('Camping criado com sucesso!');
      },
      error: (error: any) => {
        const errorMessage = `Erro ao criar camping. Detalhes: ${error?.error?.message ||
          'Erro desconhecido.'}`;
        alert(errorMessage);
      },
    });
  }
  delet(id: string | undefined) {
    this.campingService.delete(id as string);
  }
}
