import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-custom-back',
  templateUrl: './header-custom-back.component.html',
  styleUrls: ['./header-custom-back.component.scss'],
})
export class HeaderCustomBackComponent {
@Input() parameters: any;

}
