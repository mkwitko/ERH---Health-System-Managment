import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { HeaderCustomModule } from 'src/app/components/header/header-custom/header-custom.module';
import { FormCustomModule } from 'src/app/components/forms/form-custom/form-custom.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    HeaderCustomModule,
    FormCustomModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
