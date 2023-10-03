import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: any[] = [];

  addPost(post: any) {
    this.posts.push(post);
  }

  editPost(index: number, updatedPost: any) {
    this.posts[index] = updatedPost;
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}
