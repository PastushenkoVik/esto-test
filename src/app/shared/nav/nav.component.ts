import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})

export class NavComponent {
  navActive = 'active';
  @Input() navbarItems: {
    path: string,
    label: string,
    component: Component,
  }[];
}
