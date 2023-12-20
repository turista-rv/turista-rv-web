import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Table } from 'primeng/table';
import { finalize, forkJoin, take } from 'rxjs';
import { SkeletonService } from 'src/app/components/skeleton/skeleton.service';
import { User } from 'src/app/models/LoginUser.model';
import { Camping } from 'src/app/models/camping.model';
import {
  CategoryModelUpdate,
  TypeCategory,
} from 'src/app/models/category.model';
import { Image } from 'src/app/models/image.model';
import { BuscaCepService } from 'src/app/services/busca-cep.service';
import { CampingService } from 'src/app/services/camping.service';
import { CategoryService } from 'src/app/services/category.service';
import { ImageService } from 'src/app/services/image.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { RULES } from 'src/app/utils/rules-enum';

export interface Rule {
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
  @ViewChild('numeroInput') numeroInput!: ElementRef;
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

  campings: Camping[] = [];

  camping: Camping = this.initializeCamping();

  categories: CategoryModelUpdate[] = [];

  isEdit = false;

  campingDialog: boolean = false;

  deleteCampingDialog: boolean = false;

  deleteCampingsDialog: boolean = false;

  selectedCampings: Camping[] = [];

  submitted: boolean = false;

  rowsPerPageOptions = [5, 10, 20];

  public Editor = ClassicEditor;

  user = JSON.parse(localStorage.getItem('user') as string) as User;

  images: Image[] = [];

  countries = [
    { name: 'Argentina', code: 'AR' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Chile', code: 'CL' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Venezuela', code: 'VE' },
  ];

  selectedCountry: any;

  getUrlFlag(code: string) {
    return `https://flagsapi.com/${code.toUpperCase()}/flat/64.png`;
  }

  constructor(
    private _service: CampingService,
    private _toaster: ToasterService,
    public _loading: SkeletonService,
    private _imageService: ImageService,
    private _categoryService: CategoryService,
    private _buscaCep: BuscaCepService
  ) {}

  ngOnInit() {
    this.loadCampings();
    this.loadImages();
    this.loadCategories();
  }

  loadCategories() {
    this._categoryService
      .listByType(TypeCategory.CAMPING)
      .subscribe((categories) => {
        categories.map((value) => {
          this.categories.push({ category: { ...value } });
        });
      });
  }

  verifyCep() {
    const cep = this.camping.address.zipCode
      .toString()
      .replace('.', '')
      .replace('-', '')
      .replace('_', '');

    if (cep.length > 7) {
      this.buscaCep(+cep);
    }
  }

  buscaCep(cep: number) {
    this._loading.start();
    this._buscaCep
      .buscaCep(cep)
      .pipe(
        take(1),
        finalize(() => this._loading.stop())
      )
      .subscribe((response) => {
        if (!response.erro) {
          this.camping.address.city = response.localidade;
          this.camping.address.district = response.bairro;
          this.camping.address.state = response.uf;
          this.camping.address.street = response.logradouro;
          this.numeroInput.nativeElement.focus();
        } else {
          this._toaster.warning('Cep não encontrado');
        }
      });
  }

  loadImages(): void {
    this._imageService.listImages().subscribe((data) => {
      data.map((value) => {
        this.images.push({ image: { ...value } });
      });
    });
  }

  loadCampings(): void {
    this._loading.start();
    this._service
      .listCampings()
      .pipe(finalize(() => this._loading.stop()))
      .subscribe((data: Camping[]) => {
        if (data.length > 0) {
          this.campings = data;
        }
      });
  }

  openNew() {
    this.camping = this.initializeCamping();
    this.submitted = false;
    this.campingDialog = true;
  }

  initializeCamping(): Camping {
    return {
      id: undefined,
      active: true,
      name: '',
      propertyRules: '',
      images: [],
      description: '',
      areaImage: undefined,
      categories: [],
      user: this.user,
      baseValue: 0,
      address: {
        id: undefined,
        city: '',
        country: '',
        district: '',
        num: 0,
        state: '',
        street: '',
        zipCode: 0,
        complement: '',
        reference: '',
      },
      phone: 0,
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
    this.selectedCountry = this.countries.find(
      (c) => c.name === camping.address.country
    );
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
    this._loading.start();
    forkJoin(reqJoin).subscribe(
      (res) => {
        this.loadCampings();
        this.selectedCampings = [];
      },
      (e) => {
        this._loading.stop();
        this._toaster.error('Ocorreu um erro');
      }
    );
  }

  confirmDelete(id: string | undefined) {
    this.deleteCampingDialog = false;
    if (id) {
      this._loading.start();
      this._service.delete(id).subscribe(
        (response) => {
          this._toaster.success('Camping excluído com sucesso');

          this.camping = this.initializeCamping();
          this.loadCampings();
          this.cancel();
        },
        (e) => {
          this._loading.stop();
          this._toaster.error('Ocorreu um erro');
        }
      );
    }
  }

  saveProduct() {
    this.submitted = true;
    if (
      this.camping.name &&
      this.camping.phone &&
      this.camping.baseValue &&
      this.camping.address.state &&
      this.camping.address.street &&
      this.camping.address.num &&
      this.camping.address.zipCode &&
      this.camping.address.district &&
      this.selectedCountry &&
      this.camping.address.city &&
      this.camping.images.length > 0
    ) {
      this._loading.start();

      let rules = '';
      this.selectedMulti.map((rule, index) => {
        if (index === this.selectedMulti.length - 1) rules += rule.code;
        else rules += rule.code + ',';
      });

      this.camping.propertyRules = rules;

      const cep = this.camping.address.zipCode
        .toString()
        .replace('.', '')
        .replace('-', '')
        .replace('_', '');

      this.camping.address.country = this.selectedCountry.name;
      this.camping.address.zipCode = +cep;
      this.camping.address.num = +this.camping.address.num;
      this.camping.baseValue = +this.camping.baseValue;

      if (this.camping.id) {
        this._service.update(this.camping).subscribe(
          (data) => {
            this._toaster.success('Camping atualizado com sucesso');
            this.loadCampings();
            this.isEdit = false;
            this.cancel();
          },
          (e) => {
            this._loading.stop();
            this._toaster.error('Ocorreu um erro');
          }
        );
      } else {
        this._service.create(this.camping).subscribe({
          next: (data) => {
            this._toaster.success('Camping criado com sucesso');
            this.loadCampings();
            this.cancel();
          },
          error: (error: any) => {
            this._loading.stop();
            const errorMessage = `Erro ao criar camping, ${error}`;
            this._toaster.error(errorMessage);
          },
        });
      }
    } else {
      this._toaster.warning('Verifique os campos obrigatórios');
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

  cancel() {
    this.camping = this.initializeCamping();
    this.selectedMulti = [];
    this.isEdit = false;
    this.campingDialog = false;
  }

  getRules(rules: string[]): Rule[] {
    return RULES.filter((r) => rules.includes(r.code));
  }
}
