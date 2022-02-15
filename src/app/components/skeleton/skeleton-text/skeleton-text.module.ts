import { SkeletonTextComponent } from './skeleton-text.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SkeletonTextComponent],
  imports: [CommonModule, IonicModule],
  exports: [SkeletonTextComponent],
  providers: []
})

export class SkeletonTextModule{}
