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
    },
    {
      label: 'Open account',
      path: '/account',
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isButtonsScroll = window.pageYOffset > 150;
  }
}
