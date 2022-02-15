import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientesPageRoutingModule } from './pacientes-routing.module';

import { PacientesPage } from './pacientes.page';
import { HeaderCustomModule } from 'src/app/components/header/header-custom/header-custom.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientesPageRoutingModule,
    HeaderCustomModule
  ],
  declarations: [PacientesPage]
})
export class PacientesPageModule {}
