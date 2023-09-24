import {MetadataInterface} from '../interfaces/metadata-interface';

export class SystemTwoMetadata implements MetadataInterface{
  id: string = '';
  imageUrl: string = '';
  englishTitle: string = '';
  author: string = '';
  date: string = '';

  get title(): string {
    return this.englishTitle ;
  }
  get image(): string {
    return this.imageUrl;
  }
  get creator(): string {
    return this.author;
  }
  get createdDate(): string {
    return this.date;
  }

}
