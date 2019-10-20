import { Component, OnInit } from '@angular/core';

import { navbarRouterItems } from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  styles: [`
    ::ng-deep .nav-item {
      font-size: 16px;
      margin: 0 23px 0 5px;
    }
  `],
})
export class HeaderComponent implements OnInit {
  navbarItems: {path: string, label: string} [];

  ngOnInit() {
    this.navbarItems = navbarRouterItems
      .map(item => ({
        path: item.path,
        label: item.label,
      }));
  }
}
