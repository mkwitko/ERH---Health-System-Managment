import { Component, OnInit } from '@angular/core';
import { UserRegistration } from 'src/app/interfaces/auth/user-registration';
import { AllowToPassService } from 'src/app/services/allow-to-pass/allow-to-pass.service';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { MenuControlService } from 'src/app/services/screen-effects/menu-control.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { InputChangesService } from 'src/app/services/variables-management/input-changes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: UserRegistration = {};

  public acceptPrivacy = {ref: false};
  public acceptTerms = {ref: false};

  public enterForgotPasswordMode = false;

  public recoveryEmail: string;

  constructor(
    private authService: AuthService,
    private menuCtrl: MenuControlService,
    private inputChange: InputChangesService,
    private allow: AllowToPassService,
    private screen: ScreenService,
    private changePage: NavigationService
  ) { }

  ngOnInit() {
  }

  changeInputCheck(event, object){
    object.ref = this.inputChange.callInputChangeCheck(event, object);
  }

  ForgotPasswordMode(){
    this.enterForgotPasswordMode = this.inputChange.callInverseBool(this.enterForgotPasswordMode);
  }

  login(){
    if(this.allow.guardian([this.acceptPrivacy.ref, this.acceptTerms.ref], true) === true){
      this.authService.login(this.userLogin);
    } else {
      this.screen.presentToast('Leia e aceite os termos.');
    }
  }

  goToRegister(){
    this.changePage.callChangePage('register');
  }

  send(object){
    this.authService.resetPassword(object);
    this.resetForgotPassword();
  }

  resetForgotPassword(){
    this.recoveryEmail = '';
    this.ForgotPasswordMode();
  }


}
