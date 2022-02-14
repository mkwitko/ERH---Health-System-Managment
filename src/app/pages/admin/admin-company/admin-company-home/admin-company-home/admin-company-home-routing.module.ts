import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCompanyHomePage } from './admin-company-home.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCompanyHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCompanyHomePageRoutingModule {}
