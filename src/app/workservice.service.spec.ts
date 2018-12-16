import { TestBed, inject } from '@angular/core/testing';

import { WorkserviceService } from './workservice.service';

describe('WorkserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkserviceService]
    });
  });

  it('should be created', inject([WorkserviceService], (service: WorkserviceService) => {
    expect(service).toBeTruthy();
  }));
});
