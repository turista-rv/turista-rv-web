import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { finalize, forkJoin } from 'rxjs';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { SkeletonService } from 'src/app/components/skeleton/skeleton.service';
import { BoxType, TypeOfCharge } from 'src/app/models/box-type.model';
import { Box } from 'src/app/models/box.model';
import { Camping } from 'src/app/models/camping.model';
import { Image, ImageModel } from 'src/app/models/image.model';
import { BoxTypeService } from 'src/app/services/box-type.service';
import { BoxService } from 'src/app/services/box.service';
import { CampingService } from 'src/app/services/camping.service';
import { ImageService } from 'src/app/services/image.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { Rule } from '../../camping/camping/camping.component';
import { RULES } from 'src/app/utils/rules-enum';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
})
export class BoxComponent {
  boxTypeDialog: boolean = false;
  deleteBoxTypeDialog: boolean = false;
  deleteBoxTypesDialog: boolean = false;
  boxes: Box[] = [];
  boxTypes: BoxType[] = [];
  box: Box = this.intializeBox();
  selectedBoxTypes: Box[] = [];
  submitted: boolean = false;
  rowsPerPageOptions = [5, 10, 20];
  campings: Camping[] = [];
  camping!: Camping;
  images: Image[] = []; // TODO
  qtdBoxes: number = 0;
  rules: Rule[] = RULES;
  selectedMulti: Rule[] = [];

  get arraySkeleton(): number[] {
    return Array.from({ length: this.qtdBoxes }, (_, index) => index + 1);
  }

  constructor(
    private _service: BoxService,
    private _boxTypeService: BoxTypeService,
    private _campingService: CampingService,
    private _toaster: ToasterService,
    private _imageService: ImageService,
    private _loading: LoadingService,
    public _skeleton: SkeletonService
  ) {}

  ngOnInit() {
    this.loadBoxTypes();
    this.loadCampings();
    this.loadImages();
    if (localStorage.getItem('boxes')) {
      const qtd = localStorage.getItem('boxes') as string;
      this.qtdBoxes = +qtd;
    }
  }

  getRules(rules: string[]): Rule[] {
    return RULES.filter((r) => rules.includes(r.code));
  }

  loadImages(): void {
    this._imageService.listImages().subscribe((data) => {
      data.map((value) => {
        this.images.push({ image: { ...value } });
      });
    });
  }

  loadCampings() {
    this._campingService.listCampings().subscribe((data) => {
      this.campings = data;
    });
  }

  loadBoxTypes(): void {
    this._loading.start();
    this._boxTypeService
      .list()
      .pipe(finalize(() => this._loading.stop()))
      .subscribe((data) => {
        this.boxTypes = data;
      });
  }

  onChangeCamping(): void {
    this.loadBoxes();
    this.box.camping = this.camping;
  }

  loadBoxes(): void {
    this._skeleton.start();
    this._service
      .listByIdCamping(this.camping.id as string)
      .pipe(finalize(() => this._skeleton.stop()))
      .subscribe((data) => {
        this.boxes = data;
        localStorage.setItem('boxes', this.boxes.length.toString());
      });
  }

  intializeBox(): Box {
    return {
      name: '',
      active: true,
      convenience: '',
      images: [],
      price: 0,
      id: undefined,
      boxType: undefined,
      camping: this.camping,
    };
  }

  openNew() {
    this.box = this.intializeBox();
    this.submitted = false;
    this.boxTypeDialog = true;
  }

  deleteSelectedBoxTypes() {
    this.deleteBoxTypesDialog = true;
  }

  editBoxType(box: Box) {
    this.box = { ...box };
    this.boxTypeDialog = true;
    const rules = this.box.convenience.split(',');
    this.selectedMulti = RULES.filter((r) => rules.includes(r.code));
  }

  deleteBoxType(box: Box) {
    this.deleteBoxTypeDialog = true;
    this.box = { ...box };
  }

  confirmDeleteSelected() {
    this.deleteBoxTypesDialog = false;
    let reqJoin: any[] = [];
    this.selectedBoxTypes.forEach((boxType) => {
      reqJoin.push(this._service.delete(boxType.id as string));
    });
    forkJoin(reqJoin).subscribe((res) => {
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

            this.box = this.intializeBox();
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
    this.box.price = +this.box.price;
    this.submitted = true;

    let rules = '';
    this.selectedMulti.map((rule, index) => {
      if (index === this.selectedMulti.length - 1) rules += rule.code;
      else rules += rule.code + ',';
    });

    this.box.convenience = rules;

    if (this.box.id) {
      this._loading.start();
      this._service.update(this.box).subscribe(
        (response) => {
          this._toaster.success('Categoria atualizada com sucesso');
          this.boxTypeDialog = false;
          this.loadBoxes();
          this.selectedMulti = [];
          this._loading.stop();
        },
        (e) => {
          this._toaster.error('Ocorreu um erro');
          this._loading.stop();
        }
      );
    } else {
      this._loading.start();
      this._service.create(this.box).subscribe(
        (data) => {
          this._toaster.success('Categoria criada com sucesso');
          this.box = this.intializeBox();
          this.boxTypeDialog = false;
          this.loadBoxes();
          this.selectedMulti = [];
          this._loading.stop();
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
    this.selectedMulti = [];
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
