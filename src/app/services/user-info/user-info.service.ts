import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { UserRegistration } from 'src/app/interfaces/auth/user-registration';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public user: UserRegistration;
  public allUsers;
  public userManagers;
  public userShow = [];

  public collection: AngularFirestoreCollection;
  public ref = 'Usuarios';

  constructor() { }
}
