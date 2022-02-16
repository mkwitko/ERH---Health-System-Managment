import { Component, OnInit } from '@angular/core';
import { CardPathInterface } from 'src/app/interfaces/cards/card-path-interface';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  public createInfo: CardPathInterface = 
  {
    title: 'Informações Essênciais',
    subtitle: 'Altere ou preencha as informações essências do seu estabalecimento.',
    path: 'essencial-info-home',
    content: 'Nome, Endereço, Logo, Cores etc.',
    image: '../../../../assets/icon/notebook.png'
  };

  constructor() { }

  ngOnInit() {
  }

}
