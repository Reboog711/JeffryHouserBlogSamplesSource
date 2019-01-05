import { Component, OnInit } from '@angular/core';
import {ServiceOneService} from '../services/service-one.service';
import {ServiceTwoService} from '../services/service-two.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor(public service1: ServiceOneService, public service2: ServiceTwoService) { }

  ngOnInit() {
  }

}
