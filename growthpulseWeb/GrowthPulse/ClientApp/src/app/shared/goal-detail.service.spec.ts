import { TestBed } from '@angular/core/testing';

import { GoalDetailService } from './goal-detail.service';

describe('GoalDetailService', () => {
  let service: GoalDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
