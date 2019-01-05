import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServiceOneService} from './services/service-one.service';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ServiceOneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
