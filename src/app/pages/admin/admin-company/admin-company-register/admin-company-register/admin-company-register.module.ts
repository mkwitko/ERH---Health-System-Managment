import { FormCustomModule } from './../../../../../components/forms/form-custom/form-custom.module';
import { HeaderCustomBackModule } from './../../../../../components/header/header-custom-back/header-custom-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCompanyRegisterPageRoutingModule } from './admin-company-register-routing.module';

import { AdminCompanyRegisterPage } from './admin-company-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCompanyRegisterPageRoutingModule,
    HeaderCustomBackModule,
    FormCustomModule
  ],
  declarations: [AdminCompanyRegisterPage]
})
export class AdminCompanyRegisterPageModule {}
