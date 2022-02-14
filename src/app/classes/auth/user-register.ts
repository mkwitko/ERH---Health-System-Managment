import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { UserRegistration } from 'src/app/interfaces/auth/user-registration';
import { Form } from 'src/app/interfaces/forms/form';
import { AllowToPassService } from 'src/app/services/allow-to-pass/allow-to-pass.service';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { InputChangesService } from 'src/app/services/variables-management/input-changes.service';

@Injectable()
export class UserRegister {

    
  public userRegister: UserRegistration = {};
  public acceptPrivacy = {ref: false};
  public acceptTerms = {ref: false};
  public confirmPassword;
  
  public collection: AngularFirestoreCollection;
  public ref = 'Usuarios';


    public fields: Form[] = [
        {
          name: 'Nome Completo',
          type: 'text',
          position: 'floating',
          answer: '',
          field: 'userName',
          required: true
        },
        {
          name: 'E-mail',
          type: 'email',
          position: 'floating',
          answer: '',
          field: 'userEmail',
          required: true
        },
        {
            name: 'Telefone',
            type: 'text',
            position: 'floating',
            answer: '',
            field: 'userTelephone',
            required: false
        },
        {
            name: 'Senha',
            type: 'password',
            position: 'floating',
            answer: '',
            field: 'userPassword',
            required: true
        },
        {
            name: 'Confirme sua Senha',
            type: 'password',
            position: 'floating',
            answer: '',
            field: 'userConfirmPassword',
            required: true
        }
      ];
    
    constructor(
        private crud: CrudService,
        private changePage: NavigationService,
        private screen: ScreenService,
        private inputChange: InputChangesService,
        private allow: AllowToPassService,
        private auth: AuthService
    )
    {
        this.collection = this.crud.callCollectionConstructor<UserRegistration>(this.ref);
    }

    public call(object) {
        const sender: UserRegistration = {};
        for(const a of object){
            if(a.field === 'userName'){
                sender.userName = a.answer;
            } 
            else if(a.field === 'userEmail'){
                sender.userEmail = a.answer;
            }
            else if(a.field === 'userTelephone'){
                sender.userTelephone = a.answer;
            }
            else if(a.field === 'userPassword'){
                sender.userPassword = a.answer;
            }
            else if(a.field === 'userConfirmPassword'){
                sender.userConfirmPassword = a.answer;
            }
        }
        return sender;
    }

    

  changeInputCheck(event, object): void{
    object.ref = this.inputChange.callInputChangeCheck(event, object);
  }

  register(){
    if(this.allow.guardian([this.acceptPrivacy.ref, this.acceptTerms.ref], true) === true)
    {  
      if(this.userRegister.userPassword === this.confirmPassword){
        this.auth.callRegister(this.userRegister);
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
