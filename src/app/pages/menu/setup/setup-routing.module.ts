import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupPage } from './setup.page';

const routes: Routes = [
  {
    path: '',
    component: SetupPage
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'themes',
    loadChildren: () => import('./themes/themes.module').then( m => m.ThemesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupPageRoutingModule {}
