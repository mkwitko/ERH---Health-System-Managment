import { SkeletonCardModule } from './../../../../../components/skeleton/skeleton-card/skeleton-card.module';
import { FabBottomRightModule } from './../../../../../components/fab/fab-bottom-right/fab-bottom-right.module';
import { HeaderCustomBackModule } from './../../../../../components/header/header-custom-back/header-custom-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCompanyHomePageRoutingModule } from './admin-company-home-routing.module';

import { AdminCompanyHomePage } from './admin-company-home.page';
import { CardPathModule } from 'src/app/components/cards/card-path/card-path.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCompanyHomePageRoutingModule,
    HeaderCustomBackModule,
    SkeletonCardModule,
    CardPathModule,
    FabBottomRightModule,

  ],
  declarations: [AdminCompanyHomePage]
})
export class AdminCompanyHomePageModule {}
