import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-card',
  templateUrl: './skeleton-card.component.html',
  styleUrls: ['./skeleton-card.component.scss'],
})
export class SkeletonCardComponent implements OnInit {

  @Input() size;

  constructor()
  {
    if(!this.size){
      this.size = '6';
    }
  }

  ngOnInit() {}

}
