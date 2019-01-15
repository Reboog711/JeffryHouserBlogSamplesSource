import { TestBed } from '@angular/core/testing';

import { Service1Service } from './service1.service';

describe('Service1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service1Service = TestBed.get(Service1Service);
    expect(service).toBeTruthy();
  });
});
