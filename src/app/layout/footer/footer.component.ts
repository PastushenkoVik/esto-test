import { Component, OnInit } from '@angular/core';
import { footerRouterItems } from '../../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  styles: [`
    :host-context(.section-footer) ::ng-deep .nav-item {
      font-size: 13px;
      margin: 0 0 0 14px;
    }
  `],
})
export class FooterComponent implements OnInit {
  footerRouterItems: { path: string, label: string } [];

  ngOnInit() {
    this.footerRouterItems = footerRouterItems
      .map(item => ({
        path: item.path,
        label: item.label,
      }));
  }
}
