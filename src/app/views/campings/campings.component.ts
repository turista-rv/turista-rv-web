import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Camping } from 'src/app/models/camping.model';


@Component({
  selector: 'app-campings',
  templateUrl: './campings.component.html',
  styleUrls: ['./campings.component.css'],
})
export class CampingsComponent implements OnInit {
  camping: Camping | null = null;
  id: string | null = null;
  
  public Editor = ClassicEditor;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

      
      this.camping = Camping.find(camping => camping.id === this.id) || null;
    });
  }
}
