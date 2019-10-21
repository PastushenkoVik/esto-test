import { Component } from '@angular/core';

import { navbarRouterItems } from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  isHeader = true;

  markedItems: string [] = [
    'N26 You',
  ];

  navbarItems = navbarRouterItems.map(item => ({
    path: item.path,
    label: item.label,
    isMarked: this.markedItems.find(marckLabel => marckLabel === item.label),
  }));
}
