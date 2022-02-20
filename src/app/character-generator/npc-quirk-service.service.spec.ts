import { TestBed } from '@angular/core/testing';

import { NpcQuirkServiceService } from './npc-quirk-service.service';

describe('NpcQuirkServiceService', () => {
  let service: NpcQuirkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpcQuirkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
