import { Component } from '@angular/core';
import { AuthService } from './services/firebase/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public menuBool = true;

  constructor(
    private auth: AuthService
  ) 
  {
    this.auth.getAuth().onAuthStateChanged(user => {
      this.menuBool = !user;
    });
  }

  logout(){
    this.auth.callLogout();
  }
}
