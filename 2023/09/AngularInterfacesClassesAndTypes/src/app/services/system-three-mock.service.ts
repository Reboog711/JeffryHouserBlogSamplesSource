import { Injectable } from '@angular/core';
import {SystemOneMetadata} from '../classes/system-one-metadata';
import {SystemThreeMetadata} from '../classes/system-three-metadata';
import {SystemThreeTitle} from '../classes/system-three-title';
import {SystemThreeImage} from '../classes/system-three-image';
import {MetadataType} from '../types/metadata-type';

@Injectable({
  providedIn: 'root'
})
export class SystemThreeMockService {

  mockDataSource: any[] = [
    {
      id: `101112`,
      images: [
        { imageLocation: `/assets/seven.png`, purpose: 'header'},
        { imageLocation: `/assets/seven.png`, purpose: 'thumbnail'},
      ],
      titles: [
        { title: `First Image Main Title, System Three`, purpose: 'main'},
        { title: `First Image Alt Title, System Three`, purpose: 'alt'},
        { title: `First Image UK English, System Three`, purpose: 'UK Main'},
      ],
      creator: `System Three`,
      createdDate: `8/28/2023`
    },
    {
      id: `121415`,
      images: [
        { imageLocation: `/assets/eight.png`, purpose: 'header'},
        { imageLocation: `/assets/eight.png`, purpose: 'thumbnail'},
      ],
      titles: [
        { title: `Second Image Main Title, System Three`, purpose: 'main'},
        { title: `Second Image Alt Title, System Three`, purpose: 'alt'},
        { title: `Second Image Spanish, System Three`, purpose: 'Spanish Translation'},
      ],
      creator: `System Three`,
      createdDate: `9/29/2023`
    },
    {
      id: `161718`,
      images: [
        { imageLocation: `/assets/nine.png`, purpose: 'profile'},
        { imageLocation: `/assets/nine.png`, purpose: 'thumbnail'},
      ],
      titles: [
        { title: `Third Image UK Main Title, System Three`, purpose: 'UK Main'},
      ],
      creator: `System Three`,
      createdDate: `10/30/2023`
    }
  ];


  constructor() { }

  getGenericObjects(): any[] {
    return this.mockDataSource;
  }

  getClassObjects(): SystemThreeMetadata[] {
    return this.mockDataSource.map((value: SystemThreeMetadata) => {
      const results: SystemThreeMetadata = Object.assign(new SystemThreeMetadata(), value);
      results.titles = value.titles.map((title) => Object.assign(new SystemThreeTitle(), title));
      results.images = value.images.map((image) => Object.assign(new SystemThreeImage(), image));
      return results;
    });
  }

  getTypeObjects(): MetadataType[] {
    const newArray: MetadataType[] = [];
    this.mockDataSource.forEach((value) => {
      newArray.push({
        id: value.id,
        image: this.calculateImage(value.images),
        title: this.calculateTitle(value.titles),
        creator: value.author,
        createdDate: value.date
      });
    });
    return newArray;
  }

  private calculateImage(images: any): string {
    const thumbnail: SystemThreeImage[] = images.filter((image: any) => image.purpose = 'thumbnail');
    if (thumbnail.length) {
      return thumbnail[0].imageLocation;
    }
    return '';
  }
  private calculateTitle(titles: any): string {
    if (!titles.length) {
      return '';
    }

    const mainTitle: SystemThreeTitle[] = titles.filter((title: any) => title.purpose = 'main');
    if (mainTitle.length) {
      return mainTitle[0].title;
    }

    const UKMainTitle: SystemThreeTitle[] = titles.filter((title: any) => title.purpose = 'UK Main');
    if (UKMainTitle.length) {
      return UKMainTitle[0].title;
    }

    const altTitle: SystemThreeTitle[] = titles.filter((title: any) => title.purpose = 'alt');
    if (altTitle.length) {
      return altTitle[0].title;
    }

    return titles[0].title;
  }

}
