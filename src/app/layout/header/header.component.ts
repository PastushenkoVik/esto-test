import {Component, HostListener} from '@angular/core';

import { navbarRouterItems } from '../../constants';
import {LegalDocumentsComponent} from '../../pages/legal-documents/legal-documents.component';
import {HomeComponent} from '../../pages/home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  isHeader = true;
  isButtonsScroll = false;
  isMobileMenuShow = false;

  markedItems: string [] = [
    'N26 You',
  ];

  navbarItems = navbarRouterItems.map(item => ({
    path: item.path,
    label: item.label,
    isMarked: this.markedItems.find(marckLabel => marckLabel === item.label),
  }));

  onlineBanking = [
    {
      path: '',
      label: 'Online Banking',
      component: HomeComponent,
    },
  ];

  buttonOpenAccount = {
    text: 'Open Account',
    path: '',
    buttonType: {isButtonGreen: true},
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isButtonsScroll = window.pageYOffset > 255;
  }

  mobileMenuClick = () => this.isMobileMenuShow = !this.isMobileMenuShow;
}
