import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { navbarRouterItems } from './constants';
import {EmptyPageComponent} from './layout/empty-page/empty-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmptyPageComponent,
  },
  ...navbarRouterItems
    .map(item => ({
      path: item.path,
      component: item.component,
    }))
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
