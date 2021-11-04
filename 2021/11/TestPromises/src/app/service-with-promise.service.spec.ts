import { TestBed } from '@angular/core/testing';

import { ServiceWithPromiseService } from './service-with-promise.service';

describe('ServiceWithPromiseService', () => {
  let service: ServiceWithPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWithPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
