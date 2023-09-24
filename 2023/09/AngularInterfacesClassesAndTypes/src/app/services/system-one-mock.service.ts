import { Injectable } from '@angular/core';
import {SystemOneMetadata} from '../classes/system-one-metadata';
import {MetadataType} from '../types/metadata-type';

@Injectable({
  providedIn: 'root'
})
export class SystemOneMockService {

  mockDataSource: any[] = [
    {
      id: `123`,
      image: `/assets/one.png`,
      title: `First Image, System One`,
      creator: `System One`,
      createdDate: `8/28/2023`
    },
    {
      id: `456`,
      image: `/assets/two.png`,
      title: `Second Image, System One`,
      creator: `System One`,
      createdDate: `9/29/2023`
    },
    {
      id: `789`,
      image: `/assets/three.png`,
      title: `Third Image, System One`,
      creator: `System One`,
      createdDate: `10/30/2023`
    }
  ];

  constructor() { }

  getGenericObjects(): any[] {
    return this.mockDataSource;
  }

  getClassObjects(): SystemOneMetadata[] {
    return this.mockDataSource.map((value) => Object.assign(new SystemOneMetadata(), value));
  }

  getTypeObjects(): MetadataType[] {
    const newArray: MetadataType[] = [];
    this.mockDataSource.forEach((value) => {
      newArray.push({
        id: value.id,
        image: value.image,
        title: value.title,
        creator: value.creator,
        createdDate: value.createdDate
      });
    });
    return newArray;
  }

}
