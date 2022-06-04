import { TestBed } from '@angular/core/testing';

import { ImageAnimatorService } from './image-animator.service';

describe('ImageAnimatorService', () => {
  let service: ImageAnimatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageAnimatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
