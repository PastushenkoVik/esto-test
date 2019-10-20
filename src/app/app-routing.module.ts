import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { navbarRouterItems, footerRouterItems } from './constants';
import { EmptyPageComponent } from './layout/empty-page/empty-page.component';


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
    component: EmptyPageComponent,
  },
  {
    path: 'bank-account',
    component: EmptyPageComponent,
  },
  {
    path: 'you-bank-account',
    component: EmptyPageComponent,
  },
  {
    path: 'metal',
    component: EmptyPageComponent,
  },
  {
    path: 'business-account',
    component: EmptyPageComponent,
  },
  {
    path: 'plans',
    component: EmptyPageComponent,
  },
  {
    path: 'legal-documents',
    component: EmptyPageComponent,
  },
  {
    path: 'update-cookie-settings',
    component: EmptyPageComponent,
  },
  {
    path: 'privacy-policy',
    component: EmptyPageComponent,
  },
  {
    path: 'imprint',
    component: EmptyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
