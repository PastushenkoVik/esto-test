import {Component, Input} from '@angular/core';
import {IContentSection} from '../../interfaces';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent {
  @Input() plans;
  @Input() optionsList;

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

  sections: IContentSection [] = [
    {
      title: 'Find a plan that works for you.',
      isGray: true,
    },
    {
      title: '',
    },
  ];
}
