import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.scss'],
})
export class DisplayFormComponent implements OnInit {

  @Input() parameters;
  @Input() logo;

  constructor() { }

  ngOnInit() {
    console.log(this.parameters);
  }

}
