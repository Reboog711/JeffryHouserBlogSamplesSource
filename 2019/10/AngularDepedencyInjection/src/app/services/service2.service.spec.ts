import { TestBed } from '@angular/core/testing';

import { Service2Service } from './service2.service';

describe('Service2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service2Service = TestBed.get(Service2Service);
    expect(service).toBeTruthy();
  });
});
