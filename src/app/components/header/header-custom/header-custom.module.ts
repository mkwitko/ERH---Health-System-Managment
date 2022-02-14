import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCustomComponent } from './header-custom.component';
import { FlagModule } from '../../flags/flag/flag.module';

@NgModule({
  declarations: [HeaderCustomComponent],
  imports: [CommonModule, IonicModule, FlagModule],
  exports: [HeaderCustomComponent],
  providers: []
})

export class HeaderCustomModule{
}
