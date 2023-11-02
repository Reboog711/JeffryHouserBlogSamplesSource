import { TestBed } from '@angular/core/testing';

import { Http403Interceptor } from './http-403.interceptor';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse} from '@angular/common/http';

describe('Http403Interceptor', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let interceptor: Http403Interceptor;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: Http403Interceptor,
        multi: true
      }
   ]
  }).compileComponents()
  );

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    interceptor = TestBed.inject(HTTP_INTERCEPTORS)[0] as Http403Interceptor
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  const route = '/fakeUrl';
  const error: ProgressEvent = new ProgressEvent('error');
  it('should toggle errorOccured value when request status is 403', () => {
    expect(interceptor.errorOccurred).toBeFalsy();
    httpClient.get(route ).subscribe( {
      next: () => {},
      error: (err: HttpErrorResponse) => {
        expect(err.error).toEqual(error);
        expect(interceptor.errorOccurred).toBeTruthy();
      }
    });

    const req = httpMock.expectOne(route );
    req.error(error, {status: 403});

  });

});
