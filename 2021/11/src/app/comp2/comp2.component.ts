import { Component, OnInit } from '@angular/core';
import {ShareddataService} from '../shareddata.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(public sharedDataService: ShareddataService) { }

  ngOnInit(): void {
  }

}
