// admin-panel.component.ts
import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent {
  post = {
    image: '',
    title: '',
    description: '',
    date: '',
  };

  constructor(private postService: PostService) {}

  isCollapsed = false; // Inicialmente, o colapso não está ativado

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  addPost() {
    // lógica para gerar a data automaticamente (new Date())
    this.postService.addPost({ ...this.post, date: new Date() });
    this.clearForm();
  }

  clearForm() {
    this.post = {
      image: '',
      title: '',
      description: '',
      date: '',
    };
  }
}
