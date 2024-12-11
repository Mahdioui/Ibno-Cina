import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
import { Blog } from '../../models/blog.model';
import { MetriportMedicalApi } from "@metriport/api-sdk";



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  loading = true;
  error: string | null = null;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next: (blogs) => {
        this.blogs = blogs;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load blogs';
        this.loading = false;
        console.error(err);
      }
    });
  }

  getExcerpt(content: string): string {
    return content.slice(0, 100) + '...';
  }
}