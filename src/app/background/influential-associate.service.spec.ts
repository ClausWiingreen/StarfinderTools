import { TestBed } from '@angular/core/testing';

import { InfluentialAssociateService } from './influential-associate.service';

describe('InfluentialAssociateService', () => {
  let service: InfluentialAssociateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfluentialAssociateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
