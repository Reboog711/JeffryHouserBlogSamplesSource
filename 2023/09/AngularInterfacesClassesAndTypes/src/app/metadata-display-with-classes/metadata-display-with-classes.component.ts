import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-metadata-display-with-classes',
  templateUrl: './metadata-display-with-classes.component.html',
  styleUrls: ['./metadata-display-with-classes.component.css']
})
export class MetadataDisplayWithClassesComponent {
  @Input()
  data: any;

  get title(): string {
    if ('title' in this.data) {
      return this.data.title;
    }
    if ('englishTitle' in this.data) {
      return this.data.englishTitle;
    }
    return '';
  }

  get image(): string {
    if ('image' in this.data) {
      return this.data.image;
    }
    if ('imageUrl' in this.data) {
      return this.data.imageUrl;
    }
    return '';
  }
  get creator(): string {
    if ('creator' in this.data) {
      return this.data.creator;
    }
    if ('author' in this.data) {
      return this.data.author;
    }
    return '';
  }
  get createdDate(): string {
    if ('createdDate' in this.data) {
      return this.data.createdDate;
    }
    if ('date' in this.data) {
      return this.data.date;
    }
    return '';
  }
}
