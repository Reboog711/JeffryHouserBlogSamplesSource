import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Comp1Component} from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  { path: 'view1', component: Comp1Component },
  { path: 'view2', component: Comp2Component },
  { path: '**', redirectTo: 'view1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
