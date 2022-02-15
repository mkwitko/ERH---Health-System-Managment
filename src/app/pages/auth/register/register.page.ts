import { UserInfoService } from './../../../services/user-info/user-info.service';
import { Component } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { UserRegistration } from 'src/app/interfaces/auth/user-registration';
import { AllowToPassService } from 'src/app/services/allow-to-pass/allow-to-pass.service';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { InputChangesService } from 'src/app/services/variables-management/input-changes.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  public userRegister: UserRegistration = {};
  public acceptPrivacy = {ref: false};
  public acceptTerms = {ref: false};
  public confirmPassword;

  public parameters = {
    url: 'login',
    title: 'Cadastro'
  }

    constructor(
        private crud: CrudService,
        private changePage: NavigationService,
        private screen: ScreenService,
        private inputChange: InputChangesService,
        private allow: AllowToPassService,
        private auth: AuthService,
        private userInfo: UserInfoService
    )
    {
    }


  async register(){
    if(this.allow.guardian([this.acceptPrivacy.ref, this.acceptTerms.ref], true) === true)
    {
      if(this.userRegister.userPassword === this.userRegister.userConfirmPassword){
        (await this.auth.register(this.userRegister)).subscribe(cred => {
          this.toDataBase(cred.user.uid);
        })
      } else {
        this.screen.presentToast(
          'Senhas não são iguais.'
        );
      }
    }
    else {
      this.screen.presentToast(
        'Aceite os termos de uso.'
      );
    }
  }

  goToLogin(){
    this.changePage.callChangePage('login');
  }

  changeInputCheck(event, object){
    object.ref = this.inputChange.callInputChangeCheck(event, object);
  }

  toDataBase(id){
    this.prepare(id);
    this.crud.callAddClientToDb(this.userRegister, id, this.userInfo.collection);
  }

  prepare(id){
    this.removePassword();
    this.addId(id);
    this.telephoneCheck();
    this.setRole();
    this.setTime();
  }

  removePassword(){
    this.userRegister.userPassword = null;
    this.userRegister.userConfirmPassword = null;
  }

  addId(id){
    this.userRegister.userId = id;
  }

  telephoneCheck(){
    if(!this.userRegister.userTelephone){
      this.userRegister.userTelephone = '';
    }
  }

  setRole(){
    this.userRegister.role = 'user';
  }

  setTime(){
    this.userRegister.createdAt = new Date().getTime();
  }

}
