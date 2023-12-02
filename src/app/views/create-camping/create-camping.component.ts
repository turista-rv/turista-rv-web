import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  galleryImageUpload: File[] = [];
  selectedFileName: string = '';

  areaImage!: File;
  areaImageUrl: string = '';
  areaImageFileName: string = '';

  loading = true;
  editingIndex: number | null = null;
  isEditMode: boolean = false;

  showModal = false;
  modalTitle = '';
  modalFormData: any = {};

  idImage: string[] = [];

  constructor(
    private campingService: CampingService,
    private _loading: LoadingService,
    private _toaster: ToasterService,
    private http: HttpClient,
  ) { }

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

  onChangeArquivo(event: any) {
    this.image = event.target.files[0];
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFileName = fileInput.files[0].name;
      this.galleryImageUpload?.push(this.image);
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
      this.areaImageFileName = fileInput.files[0].name;
      const convertImageToURL = URL.createObjectURL(this.areaImage as File)
      this.areaImageUrl = convertImageToURL;
      fileInput.value = '';
    } else {
      this.areaImageFileName = '';
    }
  }

  addImage(imageUrl: string) {
    this.imgUrl.push(imageUrl);
    this.camping.images = this.imgUrl.map(imageUrl => ({ url: imageUrl }));
  }

  submit(): void {
    this._loading.start();

    const formData = new FormData();

    this.galleryImageUpload.forEach((image: File) => {
      formData.append('images', image, image.name);
    });

    if (this.areaImage) {
      formData.append('areaImage', this.areaImage, this.areaImageFileName);
    }

    formData.append('name', this.camping.name);
    formData.append('active', 'true');
    formData.append('description', this.camping.description as string);
    formData.append('propertyRules', this.camping.propertyRules as string);

    if (this.isEditMode && this.editingIndex !== null) {
      const campingId = this.campings[this.editingIndex]?.id ?? '';
      formData.append('id', campingId);

      for(let id of this.idImage){
        this.campingService.imageDelete(id).subscribe({
          next:(data:any) =>{
            console.log(data)
          }
        })
      }

    if(this.camping.id){
      this.campingService.areaImageDelete(this.camping.id).subscribe({
        next:(data:any) =>{
          console.log(data)
        }
      })
    }

      this.campingService.update(formData)
        .pipe(finalize(() => this._loading.stop()))
        .subscribe({
          next: (data: any) => {
            this._toaster.success('Camping atualizado com sucesso');
            this.loadCampings();
            this.cancel();
          },
          error: (error: any) => {
            const errorMessage = `Erro ao atualizar camping, ${error}`;
            this._toaster.error(errorMessage);
          },
        });
    } else {
      this.campingService.create(formData)
        .pipe(finalize(() => this._loading.stop()))
        .subscribe({
          next: (data) => {
            this._toaster.success('Camping criado com sucesso');
            this.loadCampings();
            this.cancel();
          },
          error: (error: any) => {
            const errorMessage = `Erro ao criar camping, ${error}`;
            this._toaster.error(errorMessage);
          },
        });
    }
  }


  edit(campingToEdit: Camping): void {
    this.camping.id = campingToEdit.id;

    this.http.get(campingToEdit.areaImage as unknown as string, { responseType: 'arraybuffer' }).subscribe(
      (response: ArrayBuffer) => {
        const blob = new Blob([response], { type: 'image/jpeg' });
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(blob);
      },
    );
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
    this.showModal = false;

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
    this.galleryImageUpload = [];
    this.areaImageUrl = '';
  }

  // MÉTODOS ICONES DE X DAS IMAGENS

  removeImage(imageUrl: string): void {
    for (let image of this.camping.images) {
      if(image.url === imageUrl){
        if(image.id){
          this.idImage.push(image.id)
        }
      }
    }
    const index = this.imgUrl.indexOf(imageUrl);
    if (index !== -1) {
      this.imgUrl.splice(index, 1);
      this.galleryImageUpload.splice(index, 1);
    }
  }

  removeAreaImage(): void {
    this.areaImageUrl = '';
    const fileInput = document.getElementById('areaImageUpload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  //DELETAR CAMPINGS SELECIONADOS CHECKBOX
  deleteSelectedCampings() {

  }

  // MODAL
  openModal(campingToEdit: Camping | null = null) {
    this.showModal = true;
    if (campingToEdit) {
      this.modalTitle = 'Editar Camping';
      this.camping = { ...campingToEdit };
      this.isEditMode = true;
    }
  }

  itemsModal() {
    this.modalTitle = this.camping.name === '' ? 'Adicionar Camping' : this.camping.name;
    this.modalFormData = {
      name: this.camping.name,
      description: this.camping.description,
      propertyRules: this.camping.propertyRules,
      imgUrl: [],
      areaImageUrl: '',
    }
  }
  resetForm() {
    this.camping = {
      active: true,
      name: '',
      propertyRules: '',
      images: [],
      description: '',
    };
  }

  submitForm(formData: any) {
    this.showModal = false;
  }

}