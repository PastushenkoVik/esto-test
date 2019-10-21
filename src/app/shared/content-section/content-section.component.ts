import { Component, Input } from '@angular/core';
import { IContentSection } from '../../interfaces';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent {
  @Input() section: IContentSection;
}
