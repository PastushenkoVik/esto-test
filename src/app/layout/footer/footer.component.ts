import { Component } from '@angular/core';
import { footerRouterItems } from '../../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isFooter = true;
  footerRouterItems = footerRouterItems;
}
