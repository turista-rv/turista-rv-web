import { finalize, forkJoin } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { RULES } from 'src/app/utils/rules-enum';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface Rule {
  name: string;
  code: string;
  icon: string;
}

@Component({
  selector: 'app-camping',
  templateUrl: './camping.component.html',
  styleUrls: ['./camping.component.css'],
})
export class CampingComponent implements OnInit {
  rules: Rule[] = RULES;

  galleriaResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '960px',
      numVisible: 4,
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

  selectedMulti: Rule[] = [];

  galeriaFiles: File[] = [];
  areaImageFile!: File | null;

  campings: Camping[] = [];
  camping: Camping = this.initializeCamping();

  isEdit = false;

  campingDialog: boolean = false;

  deleteCampingDialog: boolean = false;

  deleteCampingsDialog: boolean = false;

  selectedCampings: Camping[] = [];

  submitted: boolean = false;

  rowsPerPageOptions = [5, 10, 20];

  public Editor = ClassicEditor;

  constructor(
    private _service: CampingService,
    private _toaster: ToasterService,
    private _loading: LoadingService
  ) {}

  ngOnInit() {
    this.loadCampings();
  }

  loadCampings(): void {
    this._loading.start();
    this._service
      .listCampings()
      .pipe(finalize(() => this._loading.stop()))
      .subscribe((data: Camping[]) => {
        this.campings = data;
        console.log(data);
      });
  }

  openNew() {
    this.camping = this.initializeCamping();
    this.submitted = false;
    this.campingDialog = true;
  }

  initializeCamping() {
    return {
      id: undefined,
      active: true,
      name: '',
      propertyRules: '',
      images: [],
      description: '',
      areaImage: '',
      areaImageName: '',
    };
  }

  deleteSelectedCampings() {
    this.deleteCampingsDialog = true;
  }

  editCamping(camping: Camping) {
    this.isEdit = true;
    this.camping = { ...camping };
    const rules = this.camping.propertyRules.split(',');
    this.selectedMulti = RULES.filter((r) => rules.includes(r.code));
    this.campingDialog = true;
    console.log(this.camping);
  }

  deleteCamping(camping: Camping) {
    this.deleteCampingDialog = true;
    this.camping = { ...camping };
  }

  confirmDeleteSelected() {
    this.deleteCampingsDialog = false;
    let reqJoin: any[] = [];
    this.selectedCampings.forEach((camping) => {
      reqJoin.push(this._service.delete(camping.id as string));
    });
    forkJoin(reqJoin).subscribe((res) => {
      console.log(res);
      this.loadCampings();
      this.selectedCampings = [];
    });
  }

  confirmDelete(id: string | undefined) {
    this.deleteCampingDialog = false;
    if (id) {
      this._loading.start();
      this._service
        .delete(id)
        .pipe(finalize(() => this._loading.stop()))
        .subscribe((response) => {
          this._toaster.success('Categoria excluída com sucesso');

          this.camping = this.initializeCamping();
          this.loadCampings();
        });
    }
  }

  saveProduct() {
    this.submitted = true;
    this._loading.start();
    const formData = new FormData();

    this.galeriaFiles.forEach((image: File) => {
      formData.append('images', image, image.name);
    });

    if (this.areaImageFile) {
      formData.append('areaImage', this.areaImageFile, this.areaImageFile.name);
    }

    let rules = '';
    this.selectedMulti.map((rule, index) => {
      if (index === this.selectedMulti.length - 1) rules += rule.code;
      else rules += rule.code + ',';
    });

    console.log(rules);

    formData.append('name', this.camping.name);
    formData.append('active', this.camping.active ? 'true' : 'false');
    formData.append('description', this.camping.description as string);
    formData.append('propertyRules', rules);
    if (this.camping.id) {
      formData.append('id', this.camping?.id);
      this._service
        .update(formData)
        .pipe(finalize(() => this._loading.stop()))
        .subscribe((data) => {
          this._toaster.success('Camping atualizado com sucesso');
          this.loadCampings();
          this.isEdit = false;
          this.cancel();
        });
    } else {
      this._service
        .create(formData)
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

  hideDialog() {
    this.campingDialog = false;
    this.submitted = false;
    this.cancel();
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  trackByFunction(index: number, item: Rule) {
    return item.code as string; // Use um identificador único para seus itens
  }

  remove() {
    this.selectedMulti = [];
  }

  onSelectCampingImage(value: any) {
    this.galeriaFiles = value.currentFiles;
    console.log(this.galeriaFiles);
  }
  onSelectAreaImage(value: any) {
    this.areaImageFile = value.currentFiles[0];
    console.log(this.areaImageFile);
  }

  removeImage(id: string | undefined) {
    console.log(id);
  }

  removeAreaImage(id: string | undefined): void {
    console.log(id);
  }

  onRemoveAreaImage(value: any) {
    this.areaImageFile = null;
  }
  onRemoveCampingImage(value: any) {
    this.galeriaFiles = this.galeriaFiles.filter((file) => file !== value.file);
  }
  onClearCampingImage(value: any) {
    this.galeriaFiles = [];
  }

  cancel() {
    this.camping = this.initializeCamping();
    this.selectedMulti = [];
    this.galeriaFiles = [];
    this.areaImageFile = null;
    this.isEdit = false;
    this.campingDialog = false;
  }

  getRules(rules: string[]): Rule[] {
    return RULES.filter((r) => rules.includes(r.code));
  }
}
