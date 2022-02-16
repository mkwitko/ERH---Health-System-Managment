import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssencialInfoHomePageRoutingModule } from './essencial-info-home-routing.module';

import { EssencialInfoHomePage } from './essencial-info-home.page';
import { HeaderCustomModule } from 'src/app/components/header/header-custom/header-custom.module';
import { HeaderCustomBackModule } from 'src/app/components/header/header-custom-back/header-custom-back.module';
import { SkeletonTextModule } from 'src/app/components/skeleton/skeleton-text/skeleton-text.module';
import { FabBottomRightModule } from 'src/app/components/fab/fab-bottom-right/fab-bottom-right.module';
import { DisplayFormCustomModule } from 'src/app/components/forms/display/display-form/display-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EssencialInfoHomePageRoutingModule,
    HeaderCustomBackModule,
    SkeletonTextModule,
    FabBottomRightModule,
    DisplayFormCustomModule
  ],
  declarations: [EssencialInfoHomePage]
})
export class EssencialInfoHomePageModule {}
