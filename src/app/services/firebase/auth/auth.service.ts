import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

import { indexedDBLocalPersistence,
  initializeAuth,
  Auth,
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail  } from 'firebase/auth';
import { User } from 'src/app/interfaces/auth/user';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly auth: Auth;

  constructor()
  {
    const firebaseApp = initializeApp(environment.firebase);

    if (Capacitor.isNativePlatform()) {
      initializeAuth(firebaseApp, {
        persistence: indexedDBLocalPersistence
      });
    }
    this.auth = getAuth(firebaseApp);
  }

  login(user: User){
    return from(signInWithEmailAndPassword(this.auth, user.userEmail.trim(), user.userPassword.trim()));
  }

  loginAnon(){
    return from(signInAnonymously(this.auth));
  }

  logout(){
    return from(this.auth.signOut());
  }

  getAuth(){
    return this.auth;
  }

  register(user: User){
    return from(createUserWithEmailAndPassword(this.auth, user.userEmail.trim(), user.userPassword.trim()));
  }

  resetPassword(email: string){
    return from(sendPasswordResetEmail(this.auth, email.trim()));
  }
}
