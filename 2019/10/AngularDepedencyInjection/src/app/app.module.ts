import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import {FormsModule} from '@angular/forms';
import {Service2Service} from './services/service2.service';
import {Service3Service} from './services/service3.service';

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
    Service2Service,
    Service3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
