import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagePageRoutingModule } from './language-routing.module';
import { HeaderCustomBackModule } from './../../../../components/header/header-custom-back/header-custom-back.module';

import { LanguagePage } from './language.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderCustomBackModule,
    LanguagePageRoutingModule
  ],
  declarations: [LanguagePage]
})
export class LanguagePageModule {}

