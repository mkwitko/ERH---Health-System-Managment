import { Component, OnInit } from '@angular/core';
import { EssencialInfo } from 'src/app/classes/admin/admin-config/essencialInfo/essencial-info';
import { Form } from 'src/app/interfaces/forms/form';

@Component({
  selector: 'app-essencial-info',
  templateUrl: './essencial-info.page.html',
  styleUrls: ['./essencial-info.page.scss'],
})
export class EssencialInfoPage implements OnInit {

  public parameters = {
    title: 'Informações Essenciais',
    url: 'essencial-info-home'
  }

  constructor(
    public myClass: EssencialInfo
  ) { }

  ngOnInit() {
  }

}
