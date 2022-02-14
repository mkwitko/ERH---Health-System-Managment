import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUserHomePage } from './admin-user-home.page';

const routes: Routes = [
  {
    path: '',
    component: AdminUserHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUserHomePageRoutingModule {}
