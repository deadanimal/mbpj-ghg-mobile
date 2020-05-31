import { TestBed } from '@angular/core/testing';

import { RebatesService } from './rebates.service';

describe('RebatesService', () => {
  let service: RebatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RebatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
