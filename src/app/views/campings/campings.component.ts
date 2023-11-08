import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Camping } from 'src/app/models/camping.model';
import { CAMPINGS } from 'src/app/utils/CAMPINGS';

@Component({
  selector: 'app-campings',
  templateUrl: './campings.component.html',
  styleUrls: ['./campings.component.css'],
})
export class CampingsComponent implements OnInit {
  camping!: Camping;

  id: string | null = '';

  teste: string = '123';

  currentIndex = 0;

  public Editor = ClassicEditor;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    // TODO req getById
    let c = CAMPINGS.filter((camping) => camping.id === this.id);
    this.camping = c[0];
  }
}
