import { Component, OnInit } from '@angular/core';
import {IContentSection, IOptionListItem} from '../../interfaces';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  tabsAccountPlans = [
    {
      label: 'Personal',
      path: '/plans',
    },
    {
      label: 'Business',
      path: '/plans-business',
    },
  ];

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
          isDisabled: true,
          dotColor: {'background-color': 'rgb(38, 102, 120)'},
        },
      ],
      optionsListRules: {
        planCost: 0,
        isOptionDisable: [
          'typeWithdrawal',
          'typeInsurance',
          'typeDiscount',
          'typeAccess',
          'typeSupport',
        ],
      },
    },
    {
      title: 'N26 You',
      button: {
        text: 'Open Account',
        path: '/account/N26 You',
      },
      cardSlider: [
        {
          img: './assets/n26-cards-mastercard-petrol-de.png',
          alt: 'Transparent N26 Standard card',
          dotColor: {'background-color': 'rgb(38, 102, 120)'},
        },
        {
          img: './assets/n26-cards-mastercard-wheat-de.png',
          alt: 'Transparent N26 Standard card',
          dotColor: {'background-color': 'rgb(205, 163, 95)'},
        },
        {
          img: './assets/n26-cards-mastercard-rhubarb-de.png',
          alt: 'Transparent N26 Standard card',
          dotColor: {'background-color': 'rgb(203, 124, 122)'},
        },
        {
          img: './assets/n26-cards-mastercard-teal-de.png',
          alt: 'Transparent N26 Standard card',
          dotColor: {'background-color': 'rgb(54, 161, 139)'},
        },
        {
          img: './assets/n26-cards-mastercard-raven-de.png',
          alt: 'Transparent N26 Standard card',
          dotColor: {'background-color': 'rgb(116, 116, 116)'},
        },
      ],
      optionsListRules: {
        planCost: 9.90,
        isOptionDisable: [
          'typeAccess',
          'typeSupport',
        ],
      },
    },
    {
      title: 'N26 Metal',
      button: {
        text: 'Open Account',
        path: '/account/N26 Metal',
      },
      cardSlider: [
        {
          img: './assets/n26-cards-mastercard-metal-charcoalblack.png',
          alt: 'Transparent N26 Standard card',
          dotColor: {'background-color': 'rgb(56, 56, 55)'},
        },
        {
          img: './assets/n26-cards-mastercard-metal-quartzrose.png',
          alt: 'Transparent N26 Standard card',
          dotColor: {'background-color': 'rgb(232, 180, 160)'},
        },
        {
          img: './assets/n26-cards-mastercard-metal-slategrey.png',
          alt: 'Transparent N26 Standard card',
          dotColor: {'background-color': 'rgb(138, 138, 140)'},
        },
      ],
      optionsListRules: {
        planCost: 16.90,
        isOptionDisable: [],
      },
    },
  ];

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

  sections: IContentSection [] = [
    {
      title: 'Find a plan that works for you.',
    },
    {
      title: '',
    },
  ];

  ngOnInit(): void {
  }
}
