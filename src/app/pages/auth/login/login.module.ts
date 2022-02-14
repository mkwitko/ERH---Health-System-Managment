import { HeaderCustomModule } from 'src/app/components/header/header-custom/header-custom.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HeaderCustomModule,
    TranslateModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
