import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCompanyRegisterPage } from './admin-company-register.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCompanyRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCompanyRegisterPageRoutingModule {}
