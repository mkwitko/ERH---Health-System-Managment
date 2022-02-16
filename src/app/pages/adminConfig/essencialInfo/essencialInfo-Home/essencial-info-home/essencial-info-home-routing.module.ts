import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssencialInfoHomePage } from './essencial-info-home.page';

const routes: Routes = [
  {
    path: '',
    component: EssencialInfoHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssencialInfoHomePageRoutingModule {}
