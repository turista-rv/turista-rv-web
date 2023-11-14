import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  post = {
    image: '',
    title: '',
    description: '',
    date: '',
  };

  constructor(private postService: PostService) {}

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
