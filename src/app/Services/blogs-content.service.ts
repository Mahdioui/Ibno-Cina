import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsContentService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  // Fetch a specific blog post by ID
  getBlogs(id: number) {
    return this.http.get<Blog>(`${this.baseUrl}/posts/${id}`);
  }

  // Fetch all blog posts
  getBlog() {
    return this.http.get<Blog[]>(`${this.baseUrl}/posts`);
  }
}
