import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      debugger;
      console.log(params.value);
    });

    this.activatedRoute.paramMap.subscribe((params ) => {
      debugger;
      console.log(params['params'].value);
      console.log(params.get('value'));

      if (params.has('value')) {
        console.log('it has value');
      } else {
        console.log('No value');
      }

      if (params.has('noValue')) {
        console.log('it has a novalue');
      } else {
        console.log('No noValue exists');
      }
    });

    debugger;
    console.log(this.activatedRoute.snapshot.params.value);

    console.log(this.activatedRoute.snapshot.paramMap.get('value'));
  }

}
