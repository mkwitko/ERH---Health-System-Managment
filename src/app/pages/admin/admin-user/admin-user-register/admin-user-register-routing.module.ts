import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUserRegisterPage } from './admin-user-register.page';

const routes: Routes = [
  {
    path: '',
    component: AdminUserRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUserRegisterPageRoutingModule {}
