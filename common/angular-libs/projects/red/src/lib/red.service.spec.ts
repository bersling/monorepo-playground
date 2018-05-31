import { TestBed, inject } from '@angular/core/testing';

import { RedService } from './red.service';

describe('RedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedService]
    });
  });

  it('should be created', inject([RedService], (service: RedService) => {
    expect(service).toBeTruthy();
  }));
});
