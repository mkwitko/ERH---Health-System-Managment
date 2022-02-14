import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  public parameters = {
    url: '/setup',
    title: 'Idiomas',
    subtitle: '/setup/language/'
  };

  constructor() { }

  ngOnInit() {
  }

}
