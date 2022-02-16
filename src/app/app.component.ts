import { MenuControlService } from 'src/app/services/screen-effects/menu-control.service';
import { UserRegistration } from 'src/app/interfaces/auth/user-registration';
import { UserInfoService } from './services/user-info/user-info.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/firebase/auth/auth.service';
import { CrudService } from './services/firebase/crud/crud.service';
import { NavigationService } from './services/navigation/navigation.service';
import { UnsubService } from './services/unsub/unsub.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public menuBool = true;

  public adminMenu = [
    {
      name: 'Home',
      icon: 'home-sharp',
      path: 'home-admin',
      disabled: false,
      active: false
    },
    {
      name: 'Relatórios',
      icon: 'bar-chart-sharp',
      path: 'relatorios',
      disabled: false,
      active: false
    },
    {
      name: 'Usuários',
      icon: 'accessibility-sharp',
      path: 'usuarios',
      disabled: false,
      active: false
    },
    {
      name: 'Funcionários',
      icon: 'easel-sharp',
      path: 'funcionarios',
      disabled: false,
      active: false
    },
    {
      name: 'Pacientes',
      icon: 'people-circle-sharp',
      path: 'pacientes',
      disabled: false,
      active: false
    },
    {
      name: 'Clinica',
      icon: 'ribbon-sharp',
      path: 'clinica',
      disabled: false,
      active: false
    },
    {
      name: 'Configurações',
      icon: 'build-sharp',
      path: 'configuracoes',
      disabled: false,
      active: false
    }
  ]

  private model: UserRegistration;

  constructor
  (
    public userInfo: UserInfoService,
    private auth: AuthService,
    private crud: CrudService,
    private changePage: NavigationService,
    private menuCtrl: MenuControlService,
    private unsub: UnsubService
  )
  {
    this.auth.getAuth().onAuthStateChanged(user => {
      this.menuBool = !user;

      if(user){
        const sub1 = this.crud.callGet(this.userInfo.collection, this.model, user.uid).subscribe(res => {
          this.userInfo.user = res;

          if(this.userInfo.user.role === 'admin'){
            const sub2 = this.crud.callGetAll(this.userInfo.collection).subscribe(data => {
              this.userInfo.allUsers = data;
              this.userInfo.userShow = this.userInfo.allUsers;
            });
            this.unsub.unsub([sub1,sub2]);
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.userInfo.collection = this.crud.callCollectionConstructor<UserRegistration>(this.userInfo.ref);
  }

  logout(){
    this.menuCtrl.callMenuClose();
    this.auth.logout();
  }

  goTo(url){
    this.menuCtrl.callMenuClose();
    this.changePage.callChangePage(url);

  }
}
