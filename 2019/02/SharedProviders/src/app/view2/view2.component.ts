import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../service1.service';
import {Service2Service} from '../service2.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css'],
  providers: [Service1Service]
})
export class View2Component implements OnInit {

  constructor(public service1: Service1Service, public service2: Service2Service) { }

  ngOnInit() {
  }

}
