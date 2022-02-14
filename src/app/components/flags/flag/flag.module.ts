import { FlagComponent } from './flag.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FlagComponent],
  imports: [CommonModule, IonicModule],
  exports: [FlagComponent],
  providers: []
})

export class FlagModule{}
