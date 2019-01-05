import { TestBed } from '@angular/core/testing';

import { ServiceTwoService } from './service-two.service';

describe('ServiceTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTwoService = TestBed.get(ServiceTwoService);
    expect(service).toBeTruthy();
  });
});
