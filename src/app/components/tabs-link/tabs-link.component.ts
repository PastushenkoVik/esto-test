import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-link',
  templateUrl: './tabs-link.component.html',
  styleUrls: ['./tabs-link.component.scss']
})
export class TabsLinkComponent {
  @Input() tabsAccountPlans;

  tabActive = 'tab-active';
}
