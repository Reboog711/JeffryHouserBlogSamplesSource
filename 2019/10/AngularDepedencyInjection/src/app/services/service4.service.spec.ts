import { TestBed } from '@angular/core/testing';

import { Service4Service } from './service4.service';

describe('Service4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service4Service = TestBed.get(Service4Service);
    expect(service).toBeTruthy();
  });
});
