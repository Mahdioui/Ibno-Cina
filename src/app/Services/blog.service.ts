import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => response.map(item => ({
        id: item.id,
        title: item.title,
        content: item.description,
        author: item.author,
        publishDate: new Date(item.publishedAt),
        imageUrl: item.image
      })))
    );
  }

  getBlogById(id: string): Observable<Blog> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(item => ({
        id: item.id,
        title: item.title,
        content: item.description,
        author: item.author,
        publishDate: new Date(item.publishedAt),
        imageUrl: item.image
      }))
    );
  }
}
