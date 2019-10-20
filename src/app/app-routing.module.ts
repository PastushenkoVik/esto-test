import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { YouBankAccountComponent } from './pages/you-bank-account/you-bank-account.component';
import { MetalComponent } from './pages/metal/metal.component';
import { BusinessAccountComponent } from './pages/business-account/business-account.component';
import { PlansComponent } from './pages/plans/plans.component';
import { LegalDocumentsComponent } from './pages/legal-documents/legal-documents.component';
import { UpdateCookieSettingsComponent } from './pages/update-cookie-settings/update-cookie-settings.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import {EmptyPageComponent} from './layout/empty-page/empty-page.component';


// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     component: EmptyPageComponent,
//   },
//   ...navbarRouterItems
//     .map(item => ({
//       path: item.path,
//       component: item.component,
//     })),
//   ...footerRouterItems
//     .map(item => ({
//       path: item.path,
//       component: item.component,
//     }))
// ];

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'bank-account',
    component: BankAccountComponent,
  },
  {
    path: 'you-bank-account',
    component: YouBankAccountComponent,
  },
  {
    path: 'metal',
    component: MetalComponent,
  },
  {
    path: 'business-account',
    component: BusinessAccountComponent,
  },
  {
    path: 'plans',
    component: PlansComponent,
  },
  {
    path: 'legal-documents',
    component: LegalDocumentsComponent,
  },
  {
    path: 'update-cookie-settings',
    component: UpdateCookieSettingsComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
