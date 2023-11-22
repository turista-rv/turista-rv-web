import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { finalize } from 'rxjs';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-create-camping',
  templateUrl: './create-camping.component.html',
  styleUrls: ['./create-camping.component.css'],
})
export class CreateCampingComponent implements OnInit {
  campings: Camping[] = [];
  camping: Camping = {
    active: true,
    name: '',
    propertyRules: '',
    images: [],
    description: '',
  };

  public Editor = ClassicEditor;
  image!: File;
  areaImage!: File;
  areaImageUrl: string = '';
  imgUrl: string[] = [];
  loading = true;
  selectedFileName: string = '';
  areaImageUpload!: File;

  constructor(
    private campingService: CampingService,
    private _loading: LoadingService,
    private _toaster: ToasterService
  ) {}

  arquivoParaEnviar: File[] = [];

  ngOnInit(): void {
    this.loadCampings();
  }

  isActiveStatus(active: boolean): string {
    return active ? 'Ativado' : 'Desativado';
  }

  loadCampings(): void {
    this.campingService.listCampings().subscribe({
      next: (data) => {
        this.campings = data;
        this.loading = false;
      },
      error: (error: any) => {
        console.error(error);
        this.loading = false; // Finaliza o loading em caso de erro
      },
    });
  }

  addFile() {
    this.arquivoParaEnviar?.push(this.image);
    console.log(this.arquivoParaEnviar);
    this.imgUrl.push(URL.createObjectURL(this.image));
  }

  onChangeArquivo(event: any) {
    this.image = event.target.files[0];
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFileName = fileInput.files[0].name;
      this.arquivoParaEnviar?.push(this.image);
      console.log(this.arquivoParaEnviar);
      this.imgUrl.push(URL.createObjectURL(this.image));
    } else {
      this.selectedFileName = '';
    }
  }

  onChangeFotoAerea(event: any) {
    this.areaImage = event.target.files[0];
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.areaImageUpload = this.areaImage;
      this.areaImageUrl = URL.createObjectURL(this.areaImage);
    }
  }

  submit() {
    this._loading.start();
    const formData = new FormData();
    this.arquivoParaEnviar.forEach((imagem) => {
      formData.append('images', imagem, imagem.name);
    });
    if (this.areaImageUpload)
      formData.append(
        'areaImage',
        this.areaImageUpload,
        this.areaImageUpload.name
      );

    formData.append('name', this.camping.name);
    formData.append('active', 'true');
    formData.append('description', this.camping.description as string);
    formData.append('propertyRules', this.camping.propertyRules as string);
    this.campingService
      .create(formData)
      .pipe(finalize(() => this._loading.stop()))
      .subscribe({
        next: (data) => {
          console.log('CHEGOU aqui');
          console.log(`data log: ${data}`);
          this._toaster.success('Camping criado com sucesso');
          console.log(`DADOS: ${data}`);
          this.loadCampings();
          this.cancel(); 
        },
        error: (error: any) => {
          const errorMessage = `Erro ao criar camping: ${
            error?.error?.message || 'Erro desconhecido.'
          }`;
          this._toaster.error(errorMessage);
        },
      });
  }

  delet(id: string | undefined) {
    this.campingService.delete(id as string).subscribe((msg) => {
      alert(msg.message);
      this.loadCampings();
    });
  }

  cancel(): void {
    this.camping = {
      active: true,
      name: '',
      propertyRules: '',
      images: [],
      description: '',
    };
    this.imgUrl = [];
    this.arquivoParaEnviar = [];
  }
}
