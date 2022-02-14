import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCustomBackComponent } from './header-custom-back.component';

@NgModule({
  declarations: [HeaderCustomBackComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderCustomBackComponent],
  providers: []
})

export class HeaderCustomBackModule{}
