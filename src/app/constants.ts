import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { YouBankAccountComponent } from './pages/you-bank-account/you-bank-account.component';
import { MetalComponent } from './pages/metal/metal.component';
import { BusinessAccountComponent } from './pages/business-account/business-account.component';
import { PlansComponent } from './pages/plans/plans.component';
import { LegalDocumentsComponent } from './pages/legal-documents/legal-documents.component';
import { UpdateCookieSettingsComponent } from './pages/update-cookie-settings/update-cookie-settings.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { EmptyPageComponent } from './layout/empty-page/empty-page.component';
import {AccountComponent} from './pages/account/account.component';

/**
 * Header menu
 */
export const navbarRouterItems = [
  {
    path: 'bank-account',
    label: 'Bank Account',
    component: HomeComponent,
  },
  {
    path: 'you-bank-account',
    label: 'N26 You',
    component: YouBankAccountComponent,
  },
  {
    path: 'metal',
    label: 'Metal',
    component: MetalComponent,
  },
  {
    path: 'business-account',
    label: 'N26 Business',
    component: BusinessAccountComponent,
  },
  {
    path: 'plans',
    label: 'Compare plans',
    component: PlansComponent,
  },
];

/**
 * Footer menu
 */
export const footerRouterItems = [
  {
    path: 'legal-documents',
    label: 'Legal Documents',
    component: LegalDocumentsComponent,
  },
  {
    path: 'update-cookie-settings',
    label: 'Update cookie settings',
    component: UpdateCookieSettingsComponent,
  },
  {
    path: 'privacy-policy',
    label: 'Privacy Policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'imprint',
    label: 'Imprint',
    component: ImprintComponent,
  },
];

export const buttonRedirect = {
  openAccount: {
    label: 'Open account',
    path: 'account/:title',
    component: AccountComponent,
  }
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmptyPageComponent,
  },
  ...navbarRouterItems,
  ...footerRouterItems,
  buttonRedirect.openAccount,
];
