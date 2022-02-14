import { Component, OnInit } from '@angular/core';
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
export class RegisterPage implements OnInit {

  public userRegister: UserRegistration = {};
  public acceptPrivacy = {ref: false};
  public acceptTerms = {ref: false};
  public confirmPassword;
  
  public collection: AngularFirestoreCollection;
  public ref = 'Usuarios';

  constructor(
    private authService: AuthService,
    private inputChange: InputChangesService,
    private allow: AllowToPassService,
    private screen: ScreenService,
    private changePage: NavigationService,
    private crud: CrudService
  )
  {
    this.collection = this.crud.callCollectionConstructor<UserRegistration>(this.ref);
  }

  ngOnInit() {
  }

  changeInputCheck(event, object): void{
    object.ref = this.inputChange.callInputChangeCheck(event, object);
  }

  register(){
    if(this.allow.guardian([this.acceptPrivacy.ref, this.acceptTerms.ref], true) === true)
    {  
      if(this.userRegister.userPassword === this.confirmPassword){
        this.authService.callRegister(this.userRegister);
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
}
