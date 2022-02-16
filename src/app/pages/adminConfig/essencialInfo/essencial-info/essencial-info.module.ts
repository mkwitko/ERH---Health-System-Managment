import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssencialInfoPageRoutingModule } from './essencial-info-routing.module';

import { EssencialInfoPage } from './essencial-info.page';
import { HeaderCustomBackModule } from 'src/app/components/header/header-custom-back/header-custom-back.module';
import { FormCustomModule } from 'src/app/components/forms/form-custom/form-custom.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EssencialInfoPageRoutingModule,
    HeaderCustomBackModule,
    FormCustomModule
  ],
  declarations: [EssencialInfoPage]
})
export class EssencialInfoPageModule {}
