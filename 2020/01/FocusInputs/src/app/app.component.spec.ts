import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ElementRef} from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe('onClick()', () => {
    let app;
    const e1: ElementRef = new ElementRef({focus() {} } );
    const e2: ElementRef = new ElementRef({focus() {} } );

    beforeEach(() => {
      const fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      spyOn(e1.nativeElement, 'focus');
      spyOn(e2.nativeElement, 'focus');
      spyOn(app.inputs, 'toArray').and.returnValue([e1, e2]);
    });

    it('should call focus on element 0', () => {
      app.onClick(0);
      expect(e1.nativeElement.focus).toHaveBeenCalled();
      expect(e2.nativeElement.focus).not.toHaveBeenCalled();
    });

    it('should call focus on element 1', () => {
      app.onClick(1);
      expect(e1.nativeElement.focus).not.toHaveBeenCalled();
      expect(e2.nativeElement.focus).toHaveBeenCalled();
    });
  });

});
