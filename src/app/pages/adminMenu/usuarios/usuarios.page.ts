import { UserInfoService } from './../../../services/user-info/user-info.service';
import { Component, OnInit } from '@angular/core';
import { BackInfoService } from 'src/app/services/back/back-info.service';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  public title = 'Filtro de usuários'
  public parameters = [
    {
      name: this.back.roleOptions[0].name,
      value: this.back.roleOptions[0].value
    },
    {
      name: this.back.roleOptions[1].name,
      value: this.back.roleOptions[1].value
    },
    {
      name: this.back.roleOptions[2].name,
      value: this.back.roleOptions[2].value
    }
  ]

  constructor(
    public user: UserInfoService,
    public back: BackInfoService,
    public crud: CrudService
  ) { }

  ngOnInit() {
  }

  change(object){
    this.crud.callUpdate(this.user.collection, object, object.userId)
  }

  doRefresh(event?) {
    this.call();
    setTimeout(() => {
      if(event){
        event.target.complete();
      }
    }, 2000);
  }

  call(){
    const sub = this.crud.callGetAll(this.user.collection).subscribe(res => {
      this.user.allUsers = res;
    });

    setTimeout(() => {
      sub.unsubscribe();
      console.log('unsubscribed!');
      }, 2500);
  }

  changeSelect(event){
    this.back.showUserRoles = event.detail.value;
    this.filter();
  }

  filter(){
    this.user.userShow = [];
    this.user.userManagers = this.user.allUsers;
    this.user.userManagers = this.user.userManagers.filter(res => {
      if(this.back.showUserRoles.length <= 0){
        this.user.userShow = this.user.allUsers;
      } else {
        for(const a of this.back.showUserRoles){
          if(a.toString().toLowerCase() === res.role.toString().toLowerCase()){
            this.user.userShow.push(res);
          }
        }
      }
    })
  }

}
