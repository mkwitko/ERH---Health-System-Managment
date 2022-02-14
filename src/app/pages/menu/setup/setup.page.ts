import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {

  constructor(
    private navigation: NavigationService
  ) { }

  ngOnInit() {
  }

  setChoice() {}

  changePage(url: string){
    this.navigation.callChangePage(url);
  }

}
