import { TestBed, inject } from '@angular/core/testing';

import { FinanceReportsService } from './finance-reports.service';

describe('FinanceReportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinanceReportsService]
    });
  });

  it('should be created', inject([FinanceReportsService], (service: FinanceReportsService) => {
    expect(service).toBeTruthy();
  }));
});
