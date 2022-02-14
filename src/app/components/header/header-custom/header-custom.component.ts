import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-custom',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.scss'],
})
export class HeaderCustomComponent implements OnInit {

  @Input() color: string;
  @Input() flag: boolean;
  @Input() title: string;

  constructor()
  {
    if(!this.color) {
      this.color='dark';
    }
  }

  ngOnInit() {}

}
