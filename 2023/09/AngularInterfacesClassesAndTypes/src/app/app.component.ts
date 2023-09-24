import { Component, OnInit } from '@angular/core';
import { SystemOneMockService } from './services/system-one-mock.service';
import { SystemTwoMockService } from './services/system-two-mock.service';
import { SystemThreeMockService } from './services/system-three-mock.service';
import {MetadataType} from './types/metadata-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  basicObjects: any[] = [];
  multipleObjectSchemas: any[] = [];

  multipleClasses: any[] = [];

  withType: MetadataType[] = [];

  constructor(private systemOneMockService: SystemOneMockService,
              private systemTwoMockService: SystemTwoMockService,
              private systemThreeMockService: SystemThreeMockService
  ) {
  }

  ngOnInit(): void {
    this.basicObjects = this.systemOneMockService.getGenericObjects();

    this.multipleObjectSchemas = [...this.systemOneMockService.getGenericObjects(), ...this.systemTwoMockService.getGenericObjects()];

    this.multipleClasses = [...this.systemOneMockService.getClassObjects(),
                            ...this.systemTwoMockService.getClassObjects(),
                            ...this.systemThreeMockService.getClassObjects()
    ];
    this.withType = [...this.systemOneMockService.getTypeObjects(),
                      ...this.systemTwoMockService.getTypeObjects(),
                      ...this.systemThreeMockService.getTypeObjects()];
  }

}
