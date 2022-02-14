import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { FormCustomModule } from 'src/app/components/forms/form-custom/form-custom.module';
import { HeaderCustomBackModule } from 'src/app/components/header/header-custom-back/header-custom-back.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    HeaderCustomBackModule,
    FormCustomModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
