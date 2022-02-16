import { Injectable } from "@angular/core";
import { AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Clinica } from "src/app/interfaces/cadastro-empresarial/empresa/clinica";
import { Form } from "src/app/interfaces/forms/form";
import { CrudService } from "src/app/services/firebase/crud/crud.service";

@Injectable()
export class EssencialInfo {

    public collection: AngularFirestoreCollection;
    public ref = 'Informações-Essenciais';

    public formFields: Form[] = [
    {
      name: 'Nome da Clínica',
      type: 'text',
      position: 'floating',
      answer: '',
      field: 'fullName',
      required: true
    },
    {
      name: 'Endereço',
      type: 'text',
      position: 'floating',
      answer: '',
      field: 'adress',
      required: true
    },
    {
      name: 'Logo',
      type: 'file',
      position: 'fixed',
      answer: '',
      field: 'logo',
      required: true,
      accept: 'image/*'
    }
    ]

    constructor(
    private crud: CrudService
    )
    {
        this.collection = this.crud.callCollectionConstructor<Clinica>(this.ref);
    }

    public call(object){
        const sender: Clinica = {};
        for(const a of object){
          if(a.field === 'fullName'){
            sender.fullName = a.answer;
          }
          if(a.field === 'adress'){
            sender.adress = a.answer;
          }
          if(a.field === 'logo'){
            sender.logo = a.answer;
          }
        }
        return sender;
      }
}
