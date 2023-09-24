import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataDisplayWithInterfacesComponent } from './metadatadisplaywithinterfaces.component';

describe('MetadatadisplaywithinterfacesComponent', () => {
  let component: MetadataDisplayWithInterfacesComponent;
  let fixture: ComponentFixture<MetadataDisplayWithInterfacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetadataDisplayWithInterfacesComponent]
    });
    fixture = TestBed.createComponent(MetadataDisplayWithInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
