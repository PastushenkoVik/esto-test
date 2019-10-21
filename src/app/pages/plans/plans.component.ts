import { Component } from '@angular/core';
import { IContentSection, IOptionsListRuler } from '../../interfaces';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
  sections: IContentSection [] = [
    {
      title: 'Find a plan that works for you.',
    },
    {
      title: '',
    }
  ];

  optionsListRules: IOptionsListRuler [] = [
    {
      planCost: 0,
      isOptionDisable: [
        'typeWithdrawal',
        'typeInsurance',
        'typeDiscount',
        'typeAccess',
        'typeSupport',
      ],
    },
    {
      planCost: 9.90,
      isOptionDisable: [
        'typeAccess',
        'typeSupport',
      ],
    },
    {
      planCost: 16.90,
      isOptionDisable: [],
    },
  ];
}
