import { FormCustomComponent } from './form-custom.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormCustomComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [FormCustomComponent],
  providers: []
})

export class FormCustomModule{}
