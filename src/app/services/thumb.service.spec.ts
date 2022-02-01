import { TestBed } from '@angular/core/testing';

import { ThumbService } from './thumb.service';

describe('ThumbService', () => {
  let service: ThumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
