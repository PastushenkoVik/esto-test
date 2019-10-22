import { Component, Input, OnInit } from '@angular/core';
import { IOptionListItem, IOptionsListRuler } from '../../interfaces';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss']
})
export class OptionsListComponent implements OnInit {
  @Input() listRuler: IOptionsListRuler;

  optionsList: IOptionListItem [] = [
    {
      isDisable: false,
      typeCheck: true,
      text: 'Free ATM withdrawals in euros',
    },
    {
      isDisable: false,
      typeCheck: true,
      text: 'Free payments in any currency',
    },
    {
      isDisable: false,
      typeWithdrawal: true,
      text: 'Free withdrawals worldwide',
    },
    {
      isDisable: false,
      typeInsurance: true,
      text: 'Allianz insurance package',
    },
    {
      isDisable: false,
      typeDiscount: true,
      text: 'Selected discounts and offers from partner brands',
    },
    {
      isDisable: false,
      typeAccess: true,
      text: 'Exclusive access to unique Metal Experiences',
    },
    {
      isDisable: false,
      typeSupport: true,
      text: 'Dedicated Customer Support',
    },
  ];

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
