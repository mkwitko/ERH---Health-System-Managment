import { Component, OnInit } from '@angular/core';
import { EssencialInfo } from 'src/app/classes/admin/admin-config/essencialInfo/essencial-info';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { UnsubService } from 'src/app/services/unsub/unsub.service';

@Component({
  selector: 'app-essencial-info-home',
  templateUrl: './essencial-info-home.page.html',
  styleUrls: ['./essencial-info-home.page.scss'],
})
export class EssencialInfoHomePage implements OnInit {

  public parameters = {
    title: 'Informações Essenciais',
    url: 'configuracoes'
  }

  public myData = [];
  public fieldParameters;

  constructor(
    private crud: CrudService,
    private myClass: EssencialInfo,
    private unsub: UnsubService
  ) 
  {
  }

  ngOnInit() {
    this.get(); 
  }

  get(){
    const sub = this.crud.callGetAll(this.myClass.collection).subscribe(res => {
      this.myData = res;
      console.log('Data - ', this.myData);
      if(this.myData.length > 0){
        this.createParameters();
      }
      this.unsub.unsub([sub]);
    });
  }

  createParameters(){
    this.fieldParameters = [
      {
        field: 'Nome',
        value: this.myData[0].fullName
      },
      {
        field: 'Endereço',
        value: this.myData[0].adress
      }
    ]
  }

}
