import {MetadataInterface} from '../interfaces/metadata-interface';
import {SystemThreeImage} from './system-three-image';
import {SystemThreeTitle} from './system-three-title';

export class SystemThreeMetadata implements MetadataInterface {
  id: string = '';
  images: SystemThreeImage[] = [];
  titles: SystemThreeTitle[] = [];
  creator: string = '';
  createdDate: string = '';

  private _image: string = '';
  get image(): string {
    if (this._image !== '') {
      return this._image;
    }
    const thumbnail: SystemThreeImage[] = this.images.filter((image) => image.purpose = 'thumbnail');
    if (thumbnail.length) {
      this._image = thumbnail[0].imageLocation;
      return this._image;
    }
    return '';
  }

  private _title = '';
  get title(): string {
    if (this._title !== '') {
      return this._title;
    }

    if (!this.titles.length) {
      return '';
    }

    const mainTitle: SystemThreeTitle[] = this.titles.filter((title) => title.purpose = 'main');
    if (mainTitle.length) {
      this._title = mainTitle[0].title;
      return this._title;
    }

    const UKMainTitle: SystemThreeTitle[] = this.titles.filter((title) => title.purpose = 'UK Main');
    if (UKMainTitle.length) {
      this._title = UKMainTitle[0].title;
      return this._title;
    }

    const altTitle: SystemThreeTitle[] = this.titles.filter((title) => title.purpose = 'alt');
    if (altTitle.length) {
      this._title = altTitle[0].title;
      return this._title;
    }

    this._title = this.titles[0].title;
    return this._title;

  }
}
