import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {View1Component} from './view1/view1.component';

const routes: Routes = [
  {
    path: 'new',
    component: View1Component,
    data: { title: 'New' }
  },
  {
    path: 'edit',
    component: View1Component,
    data: { title: 'Edit' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
