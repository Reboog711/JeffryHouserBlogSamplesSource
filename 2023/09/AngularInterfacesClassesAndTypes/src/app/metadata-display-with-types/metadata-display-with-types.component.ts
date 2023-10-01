import {Component, Input} from '@angular/core';
import {MetadataType} from '../types/metadata-type';

@Component({
  selector: 'app-metadata-display-with-types',
  templateUrl: './metadata-display-with-types.component.html',
  styleUrls: ['./metadata-display-with-types.component.css']
})
export class MetadataDisplayWithTypesComponent {
  @Input()
  data?: MetadataType;

}
