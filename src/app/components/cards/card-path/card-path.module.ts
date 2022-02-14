import { CardPathComponent } from './card-path.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardPathComponent],
  imports: [CommonModule, IonicModule],
  exports: [CardPathComponent],
  providers: []
})

export class CardPathModule{}
