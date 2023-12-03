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

  selectedMulti: Rule[] = [];

  galeriaUrls: string[] = [];
  galeriaFiles: File[] = [];

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
      });
  }

  openNew() {
    this.camping = this.initializeCamping();
    this.submitted = false;
    this.campingDialog = true;
  }

  initializeCamping() {
    return {
      active: true,
      name: '',
      propertyRules: '',
      images: [],
      description: '',
    };
  }

  deleteSelectedCampings() {
    this.deleteCampingsDialog = true;
  }

  editCamping(camping: Camping) {
    this.camping = { ...camping };
    this.campingDialog = true;
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
    if (this.camping.id) {
    } else {
    }
  }

  hideDialog() {
    this.campingDialog = false;
    this.submitted = false;
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
}
