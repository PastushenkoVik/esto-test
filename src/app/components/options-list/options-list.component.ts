import { Component, Input, OnInit } from '@angular/core';
import { IOptionListItem, IOptionsListRuler } from '../../interfaces';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss']
})
export class OptionsListComponent implements OnInit {
  @Input() listRuler: IOptionsListRuler;
  @Input() optionsList: IOptionListItem [];

  optionsArray: IOptionListItem[];
  price: string;

  ngOnInit(): void {
    this.price = this.listRuler.planCost.toFixed(2);

    this.optionsArray = this.optionsList.map(opList => ({
      ...opList,
      isDisable: this.listRuler.isOptionDisable
        .reduce((flag, rule) => flag || opList.hasOwnProperty(rule), false),
    }));
  }
}
