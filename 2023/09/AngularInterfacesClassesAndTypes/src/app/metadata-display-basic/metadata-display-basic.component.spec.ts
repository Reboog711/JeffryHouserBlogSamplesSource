import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataDisplayBasicComponent } from './metadata-display-basic.component';

describe('MetadataDisplayBasicComponent', () => {
  let component: MetadataDisplayBasicComponent;
  let fixture: ComponentFixture<MetadataDisplayBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetadataDisplayBasicComponent]
    });
    fixture = TestBed.createComponent(MetadataDisplayBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
