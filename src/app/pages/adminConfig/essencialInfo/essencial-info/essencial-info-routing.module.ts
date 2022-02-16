import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssencialInfoPage } from './essencial-info.page';

const routes: Routes = [
  {
    path: '',
    component: EssencialInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssencialInfoPageRoutingModule {}
