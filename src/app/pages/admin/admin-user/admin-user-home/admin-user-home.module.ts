import { FabBottomRightModule } from './../../../../components/fab/fab-bottom-right/fab-bottom-right.module';
import { CardPathModule } from 'src/app/components/cards/card-path/card-path.module';
import { SkeletonCardModule } from './../../../../components/skeleton/skeleton-card/skeleton-card.module';
import { HeaderCustomBackModule } from './../../../../components/header/header-custom-back/header-custom-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUserHomePageRoutingModule } from './admin-user-home-routing.module';

import { AdminUserHomePage } from './admin-user-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUserHomePageRoutingModule,
    HeaderCustomBackModule,
    SkeletonCardModule,
    CardPathModule,
    FabBottomRightModule,
  ],
  declarations: [AdminUserHomePage]
})
export class AdminUserHomePageModule {}
