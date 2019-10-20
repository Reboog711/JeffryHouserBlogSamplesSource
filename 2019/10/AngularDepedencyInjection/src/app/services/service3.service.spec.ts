import { TestBed } from '@angular/core/testing';

import { Service3Service } from './service3.service';

describe('Service3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service3Service = TestBed.get(Service3Service);
    expect(service).toBeTruthy();
  });
});
