import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayFormComponent } from './display-form.component';


@NgModule({
  declarations: [DisplayFormComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [DisplayFormComponent],
  providers: []
})

export class DisplayFormCustomModule{}
