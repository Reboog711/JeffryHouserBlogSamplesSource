import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onSwitch() {
    console.log('switch URL');
    this.location.replaceState('/edit');
  }

}
