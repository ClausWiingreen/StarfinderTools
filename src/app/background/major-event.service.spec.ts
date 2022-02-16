import { TestBed } from '@angular/core/testing';

import { MajorEventService } from './major-event.service';

describe('MajorEventService', () => {
  let service: MajorEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MajorEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
