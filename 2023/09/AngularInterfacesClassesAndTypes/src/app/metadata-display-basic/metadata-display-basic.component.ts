import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-metadata-display-basic',
  templateUrl: './metadata-display-basic.component.html',
  styleUrls: ['./metadata-display-basic.component.css']
})
export class MetadataDisplayBasicComponent {
  @Input()
  data: any;
}
