import { finalize, forkJoin } from 'rxjs';
import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { BoxType } from 'src/app/models/box-type.model';
import { BoxTypeService } from 'src/app/services/box-type.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { Observable } from '@ckeditor/ckeditor5-utils';

@Component({
  selector: 'app-box-type',
  templateUrl: './box-type.component.html',
  styleUrls: ['./box-type.component.css'],
})
export class BoxTypeComponent {
  boxTypeDialog: boolean = false;

  deleteBoxTypeDialog: boolean = false;

  deleteBoxTypesDialog: boolean = false;

  boxTypes: BoxType[] = [];

  boxType: BoxType = {
    name: '',
    active: true,
    price: '',
  };

  selectedBoxTypes: BoxType[] = [];

  submitted: boolean = false;

  rowsPerPageOptions = [5, 10, 20];

  constructor(
    private _service: BoxTypeService,
    private _toaster: ToasterService,
    private _loading: LoadingService
  ) {}

  ngOnInit() {
    this.loadBoxTypes();
  }

  loadBoxTypes(): void {
    this._loading.start();
    this._service
      .list()
      .pipe(finalize(() => this._loading.stop()))
      .subscribe((data) => {
        this.boxTypes = data;
      });
  }

  openNew() {
    this.boxType = {
      name: '',
      active: true,
      price: '',
    };
    this.submitted = false;
    this.boxTypeDialog = true;
  }

  deleteSelectedBoxTypes() {
    this.deleteBoxTypesDialog = true;
  }

  editBoxType(boxType: BoxType) {
    this.boxType = { ...boxType };
    this.boxTypeDialog = true;
  }

  deleteBoxType(boxType: BoxType) {
    this.deleteBoxTypeDialog = true;
    this.boxType = { ...boxType };
  }

  confirmDeleteSelected() {
    this.deleteBoxTypesDialog = false;
    let reqJoin: any[] = [];
    this.selectedBoxTypes.forEach((boxType) => {
      reqJoin.push(this._service.delete(boxType.id as string));
    });
    forkJoin(reqJoin).subscribe((res) => {
      console.log(res);
      this.loadBoxTypes();
      this.selectedBoxTypes = [];
    });
  }

  confirmDelete(id: string | undefined) {
    this.deleteBoxTypeDialog = false;
    if (id) {
      this._loading.start();
      this._service
        .delete(id)
        .pipe(finalize(() => this._loading.stop()))
        .subscribe(
          (response) => {
            this._toaster.success('Categoria excluída com sucesso');

            this.boxType = {
              name: '',
              active: true,
              price: '',
            };
            this.loadBoxTypes();
          },
          (e) => {
            this._toaster.error('Ocorreu um erro');
            this._loading.stop();
          }
        );
    }
  }

  saveProduct() {
    this.submitted = true;
    if (this.boxType.id) {
      this.boxType.price = +this.boxType.price;
      this._loading.start();
      this._service.update(this.boxType).subscribe(
        (response) => {
          this._toaster.success('Categoria atualizada com sucesso');
          this.boxTypeDialog = false;
          this.loadBoxTypes();
        },
        (e) => {
          this._toaster.error('Ocorreu um erro');
          this._loading.stop();
        }
      );
    } else {
      this._loading.start();
      this._service.create(this.boxType).subscribe(
        (data) => {
          this._toaster.success('Categoria criada com sucesso');
          this.boxType = {
            name: '',
            active: true,
            price: '',
          };
          this.boxTypeDialog = false;
          this.loadBoxTypes();
        },
        (e) => {
          this._toaster.error('Ocorreu um erro');
          this._loading.stop();
        }
      );
    }
  }

  hideDialog() {
    this.boxTypeDialog = false;
    this.submitted = false;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
