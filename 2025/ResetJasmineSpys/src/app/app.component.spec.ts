import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('without resetting spy', () => {
    beforeEach(() => {
      spyOn(app, 'method2');
    })
    it('should test that method1 calls method2', () => {
      app.method1();
      expect(app.method2).toHaveBeenCalled();
    })

    it('should call method 2', () => {
      expect(app.method2()).toBe('abc'); // this fails, because method is not called
    })

  })

  describe('with resetting spy', () => {

    beforeEach(() => {
      jasmine.getEnv().allowRespy(true);
      spyOn(app, 'method2');
    })
    it('should test that method1 calls method2', () => {
      app.method1();
      expect(app.method2).toHaveBeenCalled();
    })

    it('should call method 2', () => {
      spyOn(app, 'method2').and.callThrough();
      expect(app.method2()).toBe('abc'); // this fails, because method is not called
    })

  })


});
