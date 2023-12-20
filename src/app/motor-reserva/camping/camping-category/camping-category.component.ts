import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { finalize, forkJoin } from 'rxjs';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { Category, TypeCategory } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-camping-category',
  templateUrl: './camping-category.component.html',
  styles: [],
})
export class CampingCategoryComponent {
  boxTypeDialog: boolean = false;

  deleteBoxTypeDialog: boolean = false;

  deleteBoxTypesDialog: boolean = false;

  categories: Category[] = [];
  category: Category = this.intializeCategory();
  selectedCategories: Category[] = [];

  submitted: boolean = false;

  rowsPerPageOptions = [5, 10, 20];

  constructor(
    private _service: CategoryService,
    private _toaster: ToasterService,
    private _loading: LoadingService
  ) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(): void {
    this._loading.start();
    this._service
      .listByType(TypeCategory.CAMPING)
      .pipe(finalize(() => this._loading.stop()))
      .subscribe((data) => {
        this.categories = data;
      });
  }

  intializeCategory(): Category {
    return {
      id: undefined,
      name: '',
      description: '',
      type: TypeCategory.CAMPING,
    };
  }

  openNew() {
    this.category = this.intializeCategory();
    this.submitted = false;
    this.boxTypeDialog = true;
  }

  editBoxType(category: Category) {
    this.category = { ...category };
    this.boxTypeDialog = true;
  }

  deleteBoxType(category: Category) {
    this.deleteBoxTypeDialog = true;
    this.category = { ...category };
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

            this.category = this.intializeCategory();
            this.loadCategories();
          },
          (e) => {
            this._toaster.error('Ocorreu um erro');
            this._loading.stop();
          }
        );
    }
  }

  confirmDeleteSelected() {
    this.deleteBoxTypesDialog = false;
    let reqJoin: any[] = [];
    this.selectedCategories.forEach((category) => {
      reqJoin.push(this._service.delete(category.id as string));
    });
    forkJoin(reqJoin).subscribe((res) => {
      console.log(res);
      this.loadCategories();
      this.selectedCategories = [];
    });
  }

  saveProduct() {
    this.submitted = true;
    if (this.category.id) {
      this._loading.start();
      this._service.update(this.category).subscribe(
        (response) => {
          this._toaster.success('Categoria atualizada com sucesso');
          this.boxTypeDialog = false;
          this.loadCategories();
        },
        (e) => {
          this._toaster.error('Ocorreu um erro');
          this._loading.stop();
        }
      );
    } else {
      this._loading.start();
      this._service.create(this.category).subscribe(
        (data) => {
          this._toaster.success('Categoria criada com sucesso');
          this.category = this.intializeCategory();
          this.boxTypeDialog = false;
          this.loadCategories();
        },
        (e) => {
          this._toaster.error('Ocorreu um erro');
          this._loading.stop();
        }
      );
    }
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
