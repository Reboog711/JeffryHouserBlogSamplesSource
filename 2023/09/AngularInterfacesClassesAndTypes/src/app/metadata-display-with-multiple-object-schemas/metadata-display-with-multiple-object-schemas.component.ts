import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-metadata-display-with-multiple-object-schemas',
  templateUrl: './metadata-display-with-multiple-object-schemas.component.html',
  styleUrls: ['./metadata-display-with-multiple-object-schemas.component.css']
})
export class MetadataDisplayWithMultipleObjectSchemasComponent {
  @Input()
  data: any;
}
