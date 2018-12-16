import { TestBed, inject } from '@angular/core/testing';

import { PMSServiceService } from './pmsservice.service';

describe('PMSServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PMSServiceService]
    });
  });

  it('should be created', inject([PMSServiceService], (service: PMSServiceService) => {
    expect(service).toBeTruthy();
  }));
});
