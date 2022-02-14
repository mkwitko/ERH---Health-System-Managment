import { CardPathInterface } from './../../../interfaces/cards/card-path-interface';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-card-path',
  templateUrl: './card-path.component.html',
  styleUrls: ['./card-path.component.scss'],
})
export class CardPathComponent {
  @Input() cardPath: CardPathInterface;

  constructor(
    private navigation: NavigationService
  ){};

  changePage(url){
    if(url){
      this.navigation.callChangePage(url);
    }
  }
}
