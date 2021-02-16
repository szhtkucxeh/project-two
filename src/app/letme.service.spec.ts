import { TestBed } from '@angular/core/testing';

import { LetmeService } from './letme.service';

describe('LetmeService', () => {
  let service: LetmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
