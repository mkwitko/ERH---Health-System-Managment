import { Component, OnInit } from '@angular/core';
import { UserRegistration } from 'src/app/interfaces/auth/user-registration';
import { AllowToPassService } from 'src/app/services/allow-to-pass/allow-to-pass.service';
import { CacheService } from 'src/app/services/cache/cache.service';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { GlobalizationService } from 'src/app/services/globalization/globalization.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { MenuControlService } from 'src/app/services/screen-effects/menu-control.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { InputChangesService } from 'src/app/services/variables-management/input-changes.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: UserRegistration = {};
  public passwordVisible = true;
  public recoveryEmail: string;

  constructor(
    public cache: CacheService,
    private authService: AuthService,
    private menuCtrl: MenuControlService,
    private inputChange: InputChangesService,
    private allow: AllowToPassService,
    private screen: ScreenService,
    private navagationService: NavigationService,
    private globalization: GlobalizationService

  )
  {
    this.menuCtrl.callMenuCtrl(false);
  }

  ngOnInit(): void {
    this.cacheChange();
  }

  changeInputCheck(event, object): void{
    object.ref = this.inputChange.callInputChangeCheck(event, object);
    this.cacheChange();
  }

  login(){
    if(this.allow.guardian([this.cache.acceptPrivacy.ref, this.cache.acceptTerms.ref], true) === true){
      this.authService.callLogin(this.userLogin);
    } else {
      this.screen.presentToast(
        this.globalization.translateMessage('login.error.terms-of-use')
      );
    }
  }

  forgotPassword(url: string) {
    this.navagationService.callChangePage(url);
  }

  changePasswordVisible() {
    this.passwordVisible = !this.passwordVisible;
  }

  emailChange(){
    this.cacheChange();
  }

  cacheChange(){
    this.cache.checkUser.email = this.userLogin.userEmail;
    if(this.cache.acceptPrivacy.ref === true){
      this.cache.checkUser.privacy = 'true';
    } else {
      this.cache.checkUser.privacy = 'false';
    }
    if(this.cache.acceptTerms.ref === true){
      this.cache.checkUser.terms = 'true';
    } else {
      this.cache.checkUser.terms = 'false';
    }
    this.cache.checkCache();
  }
}
