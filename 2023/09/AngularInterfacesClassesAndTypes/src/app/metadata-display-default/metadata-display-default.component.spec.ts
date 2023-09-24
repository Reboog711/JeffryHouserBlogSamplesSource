import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataDisplayDefaultComponent } from './metadatadisplaydefault.component';

describe('MetadatadisplaydefaultComponent', () => {
  let component: MetadataDisplayDefaultComponent;
  let fixture: ComponentFixture<MetadataDisplayDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetadataDisplayDefaultComponent]
    });
    fixture = TestBed.createComponent(MetadataDisplayDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
