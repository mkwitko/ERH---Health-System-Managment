import { SkeletonCardComponent } from './skeleton-card.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SkeletonCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [SkeletonCardComponent],
  providers: []
})

export class SkeletonCardModule{}
