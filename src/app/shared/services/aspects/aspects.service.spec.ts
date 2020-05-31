import { TestBed } from '@angular/core/testing';

import { AspectsService } from './aspects.service';

describe('AspectsService', () => {
  let service: AspectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
