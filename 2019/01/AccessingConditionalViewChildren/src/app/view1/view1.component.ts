import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  @Input()
  value = `default value`;

  constructor() { }

  ngOnInit() {
  }

}
