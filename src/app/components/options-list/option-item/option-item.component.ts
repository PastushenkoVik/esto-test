import { Component, Input } from '@angular/core';
import { IOptionListItem } from '../../../interfaces';

@Component({
  selector: 'app-option-item',
  templateUrl: './option-item.component.html',
  styleUrls: ['./option-item.component.scss']
})
export class OptionItemComponent {
  @Input() optionItem: IOptionListItem;
}
