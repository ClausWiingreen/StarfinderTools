import { TestBed } from '@angular/core/testing';

import { HomeWorldService } from './home-world.service';

describe('HomeWorldService', () => {
  let service: HomeWorldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeWorldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
