import {Component, Input} from '@angular/core';
import {MetadataInterface} from '../interfaces/metadata-interface';

@Component({
  selector: 'app-metadata-display-with-interfaces',
  templateUrl: './metadata-display-with-interfaces.component.html',
  styleUrls: ['./metadata-display-with-interfaces.component.css']
})
export class MetadataDisplayWithInterfacesComponent {
  @Input()
  data?: MetadataInterface;

}
