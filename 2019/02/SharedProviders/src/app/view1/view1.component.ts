import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../service1.service';
import {Service2Service} from '../service2.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css'],
  providers: [Service1Service]
})
export class View1Component implements OnInit {

  constructor(public service1: Service1Service, public service2: Service2Service) { }

  ngOnInit() {
  }

}
