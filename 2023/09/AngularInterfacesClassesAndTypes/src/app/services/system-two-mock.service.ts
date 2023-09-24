import { Injectable } from '@angular/core';
import { SystemTwoMetadata } from '../classes/system-two-metadata';
import {MetadataType} from '../types/metadata-type';

@Injectable({
  providedIn: 'root'
})
export class SystemTwoMockService {

  mockDataSource: any[] = [
    {
      id: `123`,
      imageUrl: `/assets/four.png`,
      englishTitle: `First Image, System Two`,
      author: `System Two`,
      date: `10/31/2023`
    },
    {
      id: `456`,
      imageUrl: `/assets/five.png`,
      englishTitle: `First Image, System Two`,
      author: `System Two`,
      date: `11/1/2023`
    },
    {
      id: `789`,
      imageUrl: `/assets/six.png`,
      englishTitle: `First Image, System Two`,
      author: `System Two`,
      date: `12/15/2023`
    }
  ];

  constructor() { }

  getGenericObjects(): any[] {
    return this.mockDataSource;
  }

  getClassObjects(): SystemTwoMetadata[] {
    return this.mockDataSource.map((value) => Object.assign(new SystemTwoMetadata(), value));
  }

  getTypeObjects(): MetadataType[] {
    const newArray: MetadataType[] = [];
    this.mockDataSource.forEach((value) => {
      newArray.push({
        id: value.id,
        image: value.imageUrl,
        title: value.englishTitle,
        creator: value.author,
        createdDate: value.date
      });
    });
    return newArray;
  }

}
