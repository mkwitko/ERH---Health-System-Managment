import { FormCustomModule } from './../../../../components/forms/form-custom/form-custom.module';
import { HeaderCustomBackModule } from './../../../../components/header/header-custom-back/header-custom-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUserRegisterPageRoutingModule } from './admin-user-register-routing.module';

import { AdminUserRegisterPage } from './admin-user-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUserRegisterPageRoutingModule,
    HeaderCustomBackModule,
    FormCustomModule
  ],
  declarations: [AdminUserRegisterPage]
})
export class AdminUserRegisterPageModule {}
