import { Component, OnInit } from '@angular/core';
import {ServiceOneService} from '../services/service-one.service';
import {ServiceTwoService} from '../services/service-two.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  constructor(public service1: ServiceOneService, public service2: ServiceTwoService) { }

  ngOnInit() {
  }

}
