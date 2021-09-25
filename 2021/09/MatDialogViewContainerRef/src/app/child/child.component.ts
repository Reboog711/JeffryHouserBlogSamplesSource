import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {LocalService} from '../services/local.service';
import { MatDialog } from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';
import {GlobalService} from '../services/global.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [LocalService]
})
export class ChildComponent implements OnInit {

  constructor(public dialog: MatDialog, public globalService: GlobalService, public localService: LocalService,
              public viewContainerRef: ViewContainerRef
              ) { }

  ngOnInit(): void {
  }

  onOpenPopup(): void {
    this.globalService.globalCount++;
    this.localService.localCount++;
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      height: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onOpenPopupWithViewContainerRef(): void {
    this.globalService.globalCount++;
    this.localService.localCount++;
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      height: '250px',
        viewContainerRef: this.viewContainerRef
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
