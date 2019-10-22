import {Component, OnInit} from '@angular/core';
import { IContentSection, IOptionsListRuler } from '../../interfaces';
import { buttonRedirect } from '../../constants';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  plans = [
    {
      title: 'N26',
      button: {
        text: 'Open Account',
        path: '/account/N26',
      },
      cardSlider: [
        {
          img: './assets/n26-cards-mastercard-uk.png',
          alt: 'Transparent N26 Standard card',
        },
      ],
    },
    {
      title: 'N26 You',
      button: {
        text: 'Open Account',
        path: './account/N26You',
      },
      cardSlider: [
        {
          img: './assets/n26-cards-mastercard-petrol-de.png',
          alt: 'Transparent N26 Standard card',
        },
      ],
    },
    {
      title: 'N26 Metal',
      button: {
        text: 'Open Account',
        path: '/account/N26Metal',
      },
      cardSlider: [
        {
          img: './assets/n26-cards-mastercard-metal-charcoalblack.png',
          alt: 'Transparent N26 Standard card',
        },
      ],
    },
  ];

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
