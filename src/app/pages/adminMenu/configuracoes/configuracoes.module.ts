import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracoesPageRoutingModule } from './configuracoes-routing.module';

import { ConfiguracoesPage } from './configuracoes.page';
import { HeaderCustomModule } from 'src/app/components/header/header-custom/header-custom.module';
import { CardPathModule } from 'src/app/components/cards/card-path/card-path.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracoesPageRoutingModule,
    HeaderCustomModule,
    CardPathModule
  ],
  declarations: [ConfiguracoesPage]
})
export class ConfiguracoesPageModule {}
