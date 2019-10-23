import { Component, Input, OnInit } from '@angular/core';
import { IOptionListItem } from '../../interfaces';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss']
})
export class OptionsListComponent implements OnInit {
  @Input() optionsListRulers;
  @Input() optionsList;

  optionsArray: IOptionListItem[];
  price: string;


  ngOnInit(): void {
    console.log(this.optionsListRulers);

    this.price = this.optionsListRulers.planCost.toFixed(2);

    this.optionsArray = this.optionsList.map(opList => ({
      ...opList,
      isDisable: this.optionsListRulers.isOptionDisable
        .reduce((flag, rule) => flag || opList.hasOwnProperty(rule), false),
    }));
  }
}
