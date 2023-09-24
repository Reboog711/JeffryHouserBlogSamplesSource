import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataDisplayWithMultipleObjectSchemasComponent } from './metadata-display-with-multiple-objects-schemas.component';

describe('MetadataDisplayWithMultipleObjectsSchemasComponent', () => {
  let component: MetadataDisplayWithMultipleObjectSchemasComponent;
  let fixture: ComponentFixture<MetadataDisplayWithMultipleObjectSchemasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetadataDisplayWithMultipleObjectSchemasComponent]
    });
    fixture = TestBed.createComponent(MetadataDisplayWithMultipleObjectSchemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
