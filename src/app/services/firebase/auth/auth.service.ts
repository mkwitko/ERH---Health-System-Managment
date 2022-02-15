import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { ScreenService } from '../../screen-effects/screen.service';

import { indexedDBLocalPersistence,
  initializeAuth,
  Auth,
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail  } from 'firebase/auth';
import { AllowToPassService } from '../../allow-to-pass/allow-to-pass.service';
import { GlobalizationService } from '../../globalization/globalization.service';
import { NavigationService } from '../../navigation/navigation.service';
import { UserRegistration } from 'src/app/interfaces/auth/user-registration';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly auth: Auth;

  constructor(
    private screenService: ScreenService,
    private allow: AllowToPassService,
    private globalization: GlobalizationService,
    private navigation: NavigationService
  )
  {
    const firebaseApp = initializeApp(environment.firebase);
    if (Capacitor.isNativePlatform()) {
      initializeAuth(firebaseApp, {
        persistence: indexedDBLocalPersistence
      });
    }
    this.auth = getAuth(firebaseApp);
  }

  login(user: UserRegistration){
    if(this.allow.guardian([
      user.userEmail, user.userPassword]))
    {
      return from(signInWithEmailAndPassword(this.auth, user.userEmail.trim(), user.userPassword.trim()));
    }
    else {
      this.screenService.presentToast(
        this.globalization.translateMessage('login.error.empty-fields')
      );
    }
  }

  loginGuest(){
    return from(signInAnonymously(this.auth));
  }

  logout(){
    this.navigation.callChangePage('/login');
    return from(this.auth.signOut());
  }

  getAuth(){
    return this.auth;
  }

  getUser(){
    return this.auth.currentUser;
  }

  register(user: UserRegistration){
    if(this.allow.guardian(
      [user.userEmail, user.userPassword, user.userName]
    ))
    {
      return from(createUserWithEmailAndPassword(this.auth, user.userEmail.trim(), user.userPassword.trim()));
    }
    else
    {
      this.screenService.presentToast('Preencha os campos.');
    }

  }

  resetPassword(email: string){
    if(this.allow.guardian(
      [email]
    ))
    {
      return from(sendPasswordResetEmail(this.auth, email.trim()));
    } else {
      this.screenService.presentToast(
        this.globalization.translateMessage('forgot.error.email')
      );

    }
  }

  delete(){
    return from(this.auth.currentUser.delete());
  }
}
