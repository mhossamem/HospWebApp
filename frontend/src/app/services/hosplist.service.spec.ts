import { TestBed } from '@angular/core/testing';

import { HosplistService } from './hosplist.service';

describe('HosplistService', () => {
  let service: HosplistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HosplistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
