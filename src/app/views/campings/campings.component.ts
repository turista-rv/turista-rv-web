import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-campings',
  templateUrl: './campings.component.html',
  styleUrls: ['./campings.component.css'],
})
export class CampingsComponent implements OnInit {
  camping!: Camping;
  id: string | null = null;

  public Editor = ClassicEditor;

  constructor(
    private route: ActivatedRoute,
    private campingService: CampingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    if (this.id)
      this.campingService.listCampings().subscribe((data) => {
        let camping = data.filter((value) => value.id === this.id);
        this.camping = camping[0];
      });
  }
}
