import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import { AppComponent } from './app.component';
import Spy = jasmine.Spy;

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('callServiceWithPromise() fake async', () => {
    let resolveFunction: (value: boolean | PromiseLike<boolean>) => void;
    let rejectFunction: (value: boolean | PromiseLike<boolean>) => void;
    beforeEach(() => {
      spyOn(component.serviceWithPromiseService, 'methodReturningPromise').and.returnValue(new Promise((resolve, reject) => {
        resolveFunction = resolve;
        rejectFunction = reject;
      }));
    });
    it('should call success method', fakeAsync(() => {
      component.error = false;
      component.callServiceWithPromise();
      resolveFunction(true);
      tick();
      expect(component.error).toBeTruthy();
    }));
    it('should call failure method', fakeAsync(() => {
      component.error = true;
      component.callServiceWithPromise();
      rejectFunction(false);
      tick();
      expect(component.error).toBeFalsy();
    }));

  });

  describe('callServiceWithPromise() done', () => {
    let resolveFunction: (value: boolean | PromiseLike<boolean>) => void;
    let rejectFunction: (value: boolean | PromiseLike<boolean>) => void;
    let promise: Promise<boolean>;
    let spy: Spy;
    beforeEach(() => {
      promise = new Promise((resolve, reject) => {
        resolveFunction = resolve;
        rejectFunction = reject;
      });
      spy = spyOn(component.serviceWithPromiseService, 'methodReturningPromise').and.returnValue(promise);
    });
    it('should call success method listening to promoise', (done) => {
      component.error = false;
      component.callServiceWithPromise();
      promise.then(() => {
        expect(component.error).toBeTruthy();
        done();
      });
      resolveFunction(true);
    });

    it('should call failure method listening to spy', (done) => {
      component.error = true;
      component.callServiceWithPromise();
      // worth nothing that if the then() isn't here then the catch will run here before it runs in the app.component
      promise.then().catch(() => {
        expect(component.error).toBeFalsy();
        done();
      });
      rejectFunction(false);
    });


    it('should call success method listening to spy', (done) => {
      component.error = false;
      component.callServiceWithPromise();
      resolveFunction(true);
      spy.calls.mostRecent().returnValue.then((res: any) => {
        expect(component.error).toBeTruthy();
        done();
      });
    });

    it('should call failure method listening to spy', (done) => {
      component.error = true;
      component.callServiceWithPromise();
      rejectFunction(false);
      spy.calls.mostRecent().returnValue.then().catch(() => {
        expect(component.error).toBeFalsy();
        done();
      });
    });
  });
});
