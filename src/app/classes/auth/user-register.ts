import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { UserRegistration } from 'src/app/interfaces/auth/user-registration';
import { Form } from 'src/app/interfaces/forms/form';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';

@Injectable()
export class UserRegister {

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
        private crud: CrudService
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
    }

}
