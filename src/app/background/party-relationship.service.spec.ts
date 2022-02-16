import { TestBed } from '@angular/core/testing';

import { PartyRelationshipService } from './party-relationship.service';

describe('PartyRelationshipService', () => {
  let service: PartyRelationshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyRelationshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
