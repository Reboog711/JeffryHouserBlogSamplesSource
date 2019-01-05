import { TestBed } from '@angular/core/testing';

import { ServiceOneService } from './service-one.service';

describe('ServiceOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceOneService = TestBed.get(ServiceOneService);
    expect(service).toBeTruthy();
  });
});
