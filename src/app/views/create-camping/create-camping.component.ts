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
  imgUrl: string[] = [];
  areaImage: File | string | null = null;
  areaImageUrl: string = '';
  areaImageUpload: File | null = null;
  loading = true;
  selectedFileName: string = '';
  editingIndex: number | null = null;
  isEditMode: boolean = false;

  constructor(
    private campingService: CampingService,
    private _loading: LoadingService,
    private _toaster: ToasterService
  ) { }

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
    this.imgUrl.push(URL.createObjectURL(this.image));
  }

  onChangeArquivo(event: any) {
    this.image = event.target.files[0];
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFileName = fileInput.files[0].name;
      this.arquivoParaEnviar?.push(this.image);
      this.imgUrl.push(URL.createObjectURL(this.image));
      fileInput.value = '';
    } else {
      this.selectedFileName = '';
    }
  }

  onChangeFotoAerea(event: any) {
    this.areaImage = event.target.files[0];
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.areaImage = fileInput.files[0];
      this.areaImageUrl = URL.createObjectURL(this.areaImage as File);
      this.areaImageUpload = this.areaImage; // Atualize a área de upload também
    }
  }

  submit() {
    console.log('Submit method called');
    this._loading.start();

    const formData = new FormData();

    this.arquivoParaEnviar.forEach((imagem) => {
      formData.append('images', imagem, imagem.name);
      console.log(`Tipo de arquivo ${imagem.name}: ${imagem.type}`);
    });

    if (this.areaImageUpload) {
      formData.append('areaImage', this.areaImageUpload, this.areaImageUpload.name);
      console.log(`Tipo de arquivo da área: ${this.areaImageUpload.type}`);
    }

    formData.append('name', this.camping.name);
    formData.append('active', 'true');
    formData.append('description', this.camping.description as string);
    formData.append('propertyRules', this.camping.propertyRules as string);
    console.log('descricao e outros:', this.camping.name, this.camping.description, this.camping.propertyRules)
    console.log('entrando no modo editar:', this.isEditMode, this.editingIndex);

    if (this.isEditMode && this.editingIndex !== null) {
      const campingId = this.campings[this.editingIndex]?.id ?? '';
      console.log('Camping ID:', campingId);

      // Adiciona os IDs das imagens a serem removidas
      const imagesToRemove = this.campings[this.editingIndex]?.images
        .filter((image) => !this.imgUrl.includes(image.url))
        .map((image) => image.id);

      console.log('Imagens para remover:', imagesToRemove);

      // Adiciona os IDs das imagens removidas ao FormData
      if (imagesToRemove.length > 0) {
        formData.append('imagesToRemove', imagesToRemove.join(','));
      }

      // Utilizando a URL completa para a atualização
      console.log('Form Data antes do update request:', formData);
      this.campingService.update(formData)
        .pipe(finalize(() => this._loading.stop()))
        .subscribe({
          next: (data: any) => {
            console.log('Update success:', data);
            this._toaster.success('Camping atualizado com sucesso');
            this.loadCampings();
            this.cancel();
          },
          error: (error: any) => {
            const errorMessage = `Erro ao atualizar camping. Detalhes: ${error}`;
            this._toaster.error(errorMessage);
          },
        });
    } else {
      console.log('Form Data antes da criação da request:', formData);
      this.campingService.create(formData)
        .pipe(finalize(() => this._loading.stop()))
        .subscribe({
          next: (data) => {
            console.log('Create success:', data);
            this._toaster.success('Camping criado com sucesso');
            this.loadCampings();
            this.cancel();
          },
          error: (error: any) => {
            const errorMessage = `Erro ao criar camping. Detalhes: ${error}`;
            this._toaster.error(errorMessage);
          },
        });
    }
  }




  edit(campingToEdit: Camping): void {
    this.isEditMode = true;
    this.editingIndex = this.campings.indexOf(campingToEdit);
    this.camping = { ...campingToEdit };

    // Limpar a lista de imagens
    this.imgUrl = [];
    this.areaImageUrl = '';
    for (let image of campingToEdit.images) {
      this.imgUrl.push(image.url);
    }

    if (campingToEdit.areaImage) {
      this.areaImageUrl = campingToEdit.areaImage as unknown as string;
    }

    // const formData = new FormData();
    // formData.append('name', this.camping.name);
    // formData.append('active', 'true');
    // formData.append('description', this.camping.description as string);
    // formData.append('propertyRules', this.camping.propertyRules as string);

    // console.log('Conteúdo do FormData:', formData);

    window.scrollTo(0, 200);
  }

  delet(id: string | undefined) {
    // Obtenha o nome do camping usando o ID
    const campingToDelete = this.campings.find(camping => camping.id === id);
    const campingName = campingToDelete ? campingToDelete.name : 'Camping';

    const confirmDelete = confirm(`Tem certeza que deseja deletar o camping: "${campingName}" ?`);
    if (confirmDelete) {
      this.campingService.delete(id as string)
        .subscribe({
          next: (msg) => {
            console.log('Resposta do serviço:', msg);
            alert(msg.message);
            this.loadCampings();
          },
          error: (error: any) => {
            this._toaster.error(error)
            console.error('Erro ao tentar deletar Camping:', error);
          },
        });
    }
  }

  cancel(): void {
    this.isEditMode = false;
    this.editingIndex = null;
    this.camping = {
      active: true,
      name: '',
      propertyRules: '',
      images: [],
      description: '',
    };
    this.imgUrl = [];
    this.arquivoParaEnviar = [];
    this.areaImageUrl = '';
  }

  removeImage(imageUrl: string): void {
    const index = this.imgUrl.indexOf(imageUrl);
    if (index !== -1) {
      this.imgUrl.splice(index, 1);
      this.arquivoParaEnviar.splice(index, 1);
    }
  }

  removeAreaImage() {
    this.areaImageUrl = '';
    const fileInput = document.getElementById('areaImageUpload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }
}
