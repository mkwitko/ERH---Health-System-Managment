import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupPageRoutingModule } from './setup-routing.module';

import { SetupPage } from './setup.page';

import { HeaderCustomModule } from './../../../components/header/header-custom/header-custom.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetupPageRoutingModule,
    HeaderCustomModule
  ],
  declarations: [SetupPage]
})
export class SetupPageModule {}
