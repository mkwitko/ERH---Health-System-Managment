import { CardPathModule } from './../../../components/cards/card-path/card-path.module';
import { HeaderCustomModule } from './../../../components/header/header-custom/header-custom.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    HeaderCustomModule,
    CardPathModule
  ],
  declarations: [AdminPage]
})
export class AdminPageModule {}
