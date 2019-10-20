import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../services/service1.service';
import {Service2Service} from '../services/service2.service';
import {Service3Service} from '../services/service3.service';
import {Service4Service} from '../services/service4.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css'],
  providers: [Service4Service]
})
export class View2Component implements OnInit {

  constructor(public service1: Service1Service,
              public service2: Service2Service,
              public service3: Service3Service,
              public service4: Service4Service) { }

  ngOnInit() {
  }

}
