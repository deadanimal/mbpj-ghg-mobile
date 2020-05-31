import { TestBed } from '@angular/core/testing';

import { EvaluationSchedulesService } from './evaluation-schedules.service';

describe('EvaluationSchedulesService', () => {
  let service: EvaluationSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
