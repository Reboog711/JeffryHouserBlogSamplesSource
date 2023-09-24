import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataDisplayWithTypesComponent } from './metadatadisplaywithtypes.component';

describe('MetadatadisplaywithtypesComponent', () => {
  let component: MetadataDisplayWithTypesComponent;
  let fixture: ComponentFixture<MetadataDisplayWithTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetadataDisplayWithTypesComponent]
    });
    fixture = TestBed.createComponent(MetadataDisplayWithTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
