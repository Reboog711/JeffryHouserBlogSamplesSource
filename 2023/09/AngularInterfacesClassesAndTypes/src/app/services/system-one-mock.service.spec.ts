import { TestBed } from '@angular/core/testing';

import { SystemonemockService } from './systemonemock.service';

describe('SystemonemockService', () => {
  let service: SystemonemockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemonemockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
