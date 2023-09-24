import { TestBed } from '@angular/core/testing';

import { SystemTwoMockService } from './systemtwomock.service';

describe('SystemtwomockService', () => {
  let service: SystemTwoMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemTwoMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
