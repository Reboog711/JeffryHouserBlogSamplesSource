import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MetadataDisplayBasicComponent } from './metadata-display-basic/metadata-display-basic.component';
import {MetadataDisplayWithInterfacesComponent} from './metadata-display-with-interfaces/metadata-display-with-interfaces.component';
import {MetadataDisplayWithTypesComponent} from './metadata-display-with-types/metadata-display-with-types.component';
import { MetadataDisplayWithMultipleObjectSchemasComponent } from './metadata-display-with-multiple-object-schemas/metadata-display-with-multiple-object-schemas.component';
import { MetadataDisplayWithClassesComponent } from './metadata-display-with-classes/metadata-display-with-classes.component';

@NgModule({
  declarations: [
    AppComponent,
    MetadataDisplayWithInterfacesComponent,
    MetadataDisplayWithTypesComponent,
    MetadataDisplayBasicComponent,
    MetadataDisplayWithMultipleObjectSchemasComponent,
    MetadataDisplayWithClassesComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
