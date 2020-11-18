import { TestBed } from '@angular/core/testing';

import { GentokenService } from './gentoken.service';

describe('GentokenService', () => {
  let service: GentokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GentokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
