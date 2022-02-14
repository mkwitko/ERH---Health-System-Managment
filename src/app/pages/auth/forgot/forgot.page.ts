import { Component, OnInit } from '@angular/core';
import { MenuControlService } from 'src/app/services/screen-effects/menu-control.service';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  public recoveryEmail: string;

  constructor(
    private navagationService: NavigationService,
    private auth: AuthService,
    private menuCtrl: MenuControlService,
  ) {
    this.menuCtrl.callMenuCtrl(false);
  }

  ngOnInit() {
  }

  sendRessetPassword() {
    this.auth.callResetPassword(this.recoveryEmail)
    .then(() => {
      this.recoveryEmail = '';
    });
  }

  returnLogin() {
    this.navagationService.callGoBack();
  }

}
