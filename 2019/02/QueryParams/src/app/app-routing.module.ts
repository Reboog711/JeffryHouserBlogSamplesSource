import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {View1Component} from './view1/view1.component';

const routes: Routes = [
  { path: 'view1/:value', component: View1Component },
  { path: '**', redirectTo: 'view1/default' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
