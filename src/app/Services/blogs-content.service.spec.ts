import { TestBed } from '@angular/core/testing';

import { BlogsContentService } from './blogs-content.service';

describe('BlogsContentService', () => {
  let service: BlogsContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
