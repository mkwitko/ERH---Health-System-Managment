import { ThemesPage } from './themes.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderCustomBackModule } from './../../../../components/header/header-custom-back/header-custom-back.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderCustomBackModule,
  ],
  declarations: [ThemesPage]
})
export class ThemesPageModule {}

