import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metadata-display-default',
  templateUrl: './metadata-display-default.component.html',
  styleUrls: ['./metadata-display-default.component.css']
})
export class MetadataDisplayDefaultComponent {

  @Input()
  data: any;
}
