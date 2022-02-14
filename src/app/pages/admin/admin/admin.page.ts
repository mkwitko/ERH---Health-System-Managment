import { CardPathInterface } from './../../../interfaces/cards/card-path-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor() { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public createCompany: CardPathInterface = {
    title: 'Cadastro - Empresas',
    subtitle: 'Crie, edite e administre as empresas aqui',
    path: 'admin-company-home'
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public createUser: CardPathInterface = {
    title: 'Cadastro - Usuários',
    subtitle: 'Crie, edite e administre os usuários aqui',
    path: 'admin-user-home'
  };

  ngOnInit() {
  }

}
