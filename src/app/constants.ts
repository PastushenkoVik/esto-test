import { EmptyPageComponent } from './layout/empty-page/empty-page.component';

/**
 * Header menu
 */
export const navbarRouterItems = [
  {
    path: 'bank-account',
    label: 'Bank Account',
    component: EmptyPageComponent,
//    component: HomeComponent,
  },
  {
    path: 'you-bank-account',
    label: 'N26 YouNew',
    component: EmptyPageComponent,
//    component: YouBankAccountComponent,
  },
  {
    path: 'metal',
    label: 'Metal',
    component: EmptyPageComponent,
//    component: MetalComponent,
  },
  {
    path: 'business-account',
    label: 'N26 Business',
    component: EmptyPageComponent,
//    component: BusinessAccountComponent,
  },
  {
    path: 'plans',
    label: 'Compare plans',
    component: EmptyPageComponent,
//    component: PlansComponent,
  },
];

/**
 * Footer menu
 */
export const footerRouterItems = [
  {
    path: 'legal-documents',
    label: 'Legal Documents',
    component: EmptyPageComponent,
//    component: LegalDocumentsComponent,
  },
  {
    path: 'update-cookie-settings',
    label: 'Update cookie settings',
    component: EmptyPageComponent,
//    component: UpdateCookieSettingsComponent,
  },
  {
    path: 'privacy-policy',
    label: 'Privacy Policy',
    component: EmptyPageComponent,
//    component: PrivacyPolicyComponent,
  },
  {
    path: 'imprint',
    label: 'Imprint',
    component: EmptyPageComponent,
//    component: ImprintComponent,
  },
];
