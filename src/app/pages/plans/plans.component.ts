import {Component, OnInit} from '@angular/core';
import { IContentSection, IOptionsListRuler } from '../../interfaces';
import { buttonRedirect } from '../../constants';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  buttonOpenAccount = {
    text: 'Open Account',
    pathN26: '/account/N26',
    pathN26You: '/account/N26You',
    pathN26Metal: '/account/N26Metal',
  };

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

  ngOnInit(): void {
  }
}
