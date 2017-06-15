import { TestBed, inject } from '@angular/core/testing';

import { RiLogViewerService } from './ri-log-viewer.service';

describe('RiLogViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiLogViewerService]
    });
  });

  it('should be created', inject([RiLogViewerService], (service: RiLogViewerService) => {
    expect(service).toBeTruthy();
  }));
});
