import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-buttons-block',
  templateUrl: './buttons-block.component.html',
  styleUrls: ['./buttons-block.component.scss']
})
export class ButtonsBlockComponent {
  isButtonsScroll = false;

  buttonsList = [
    {
      label: 'Online Bankibg',
      path: '/account',
      buttonType: {isButtonWhite: true},
    },
    {
      label: 'Open account',
      path: '/account',
      buttonType: {isButtonGreen: true},
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isButtonsScroll = window.pageYOffset > 150;
  }
}
