import { TestBed } from '@angular/core/testing';

import { SystemthreemockService } from './systemthreemock.service';

describe('SystemthreemockService', () => {
  let service: SystemthreemockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemthreemockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
