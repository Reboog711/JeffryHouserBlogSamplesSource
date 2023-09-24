import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataDisplayWithClassesComponent } from './metadata-display-with-classes.component';

describe('MetadataDisplayWithClassesComponent', () => {
  let component: MetadataDisplayWithClassesComponent;
  let fixture: ComponentFixture<MetadataDisplayWithClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetadataDisplayWithClassesComponent]
    });
    fixture = TestBed.createComponent(MetadataDisplayWithClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
