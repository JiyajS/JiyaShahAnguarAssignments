import { TestBed } from '@angular/core/testing';

import { OnlineBankingService } from './online-banking.service';

describe('OnlineBankingService', () => {
  let service: OnlineBankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineBankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
