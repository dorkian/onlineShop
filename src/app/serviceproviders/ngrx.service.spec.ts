import { TestBed, inject } from '@angular/core/testing';

import { NgrxService } from './ngrx.service';

describe('NgrxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgrxService]
    });
  });

  it('should be created', inject([NgrxService], (service: NgrxService) => {
    expect(service).toBeTruthy();
  }));
});
