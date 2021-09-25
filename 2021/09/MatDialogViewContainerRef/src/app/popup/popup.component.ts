import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../services/global.service';
import {LocalService} from '../services/local.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public globalService: GlobalService, public localService: LocalService) { }

  ngOnInit(): void {
  }

}
