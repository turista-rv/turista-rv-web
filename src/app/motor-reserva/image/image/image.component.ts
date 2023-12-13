import { Component } from '@angular/core';
import { Image, ImageModel } from '../../../models/image.model';
import { ImageService } from 'src/app/services/image.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/LoginUser.model';
import { PaginatorState } from 'primeng/paginator';
import { SkeletonService } from 'src/app/components/skeleton/skeleton.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  totalImages: ImageModel[] = [];
  images: ImageModel[] = [];
  formData: FormData = new FormData();
  imagesFiles: File[] = [];

  first: number = 0;

  rows: number = 10;

  constructor(
    private _imageService: ImageService,
    public skeleton: SkeletonService
  ) {}

  ngOnInit(): void {
    this.listImages();
  }

  listImages() {
    this.skeleton.start();
    this._imageService.listImages().subscribe((data) => {
      this.totalImages = data;
      this.images = data.slice(this.first, this.first + this.rows);
      console.log(this.images);
      this.skeleton.stop();
    });
  }

  onSelectImages(value: any) {
    console.log(value);
    this.imagesFiles = value.currentFiles;
  }

  onSendImages() {
    const user = JSON.parse(localStorage.getItem('user') as string) as User;
    console.log(user);
    this.imagesFiles.forEach((image) => {
      this.formData.append('images', image, image.name);
    });
    this.formData.append('idUser', user.id as string);

    this._imageService.upload(this.formData).subscribe((data) => {
      console.log(data);
      this.formData = new FormData();
    });
  }

  onPageChange(event: PaginatorState) {
    console.log(event);
    this.first = event.first as number;
    this.rows = event.rows as number;
    this.images = this.totalImages.slice(this.first, this.first + this.rows);
  }
}
