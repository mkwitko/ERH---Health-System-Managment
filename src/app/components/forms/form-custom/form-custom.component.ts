import { InputChangesService } from './../../../services/variables-management/input-changes.service';
import { Component, Input } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AllowToPassService } from 'src/app/services/allow-to-pass/allow-to-pass.service';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';

@Component({
  selector: 'app-form-custom',
  templateUrl: './form-custom.component.html',
  styleUrls: ['./form-custom.component.scss'],
})
export class FormCustomComponent{
  @Input() fields: any = {};
  @Input() collection: AngularFirestoreCollection;
  @Input() myFunction;
  @Input() ref;
  @Input() register: boolean;
  @Input() registerFunc;

  constructor(
    private allow: AllowToPassService,
    private screen: ScreenService,
    private nav: NavigationService,
    private crud: CrudService,
    private variableManagment: InputChangesService
  ){}

  async submit(){

    // Photo Holder
    let holdPhoto;

    if(this.canPass()){
      try
      {
        // Send to database fields
        const send = this.myFunction(this.fields);
        console.log(send);

        // if has photo
        if(send.logo){
          holdPhoto = send.logo;
          send.logo = '';
        }

        //If register
        if(this.allow.guardian([
          this.register], true)) {
            console.log('True');
            this.registerFunc(send);
        }

        // Add to Database
        this.crud.callAdd(this.collection, send).then((res) => {

          // Upload System
          if(holdPhoto){
            this.crud.callUploadFileStorage(holdPhoto, res.id, this.ref).then((down) => {
              send.logo = down;
            });
          }

          // Update To Fill Id + Photo (if needed)
          send.id = res.id;
          this.crud.callUpdate(this.collection, send, res.id);
        });
      }
      catch(error)
      {
        this.screen.presentToast(error);
      }
      finally
      {
        this.nav.callGoBack();
      }
    } else {
      this.screen.presentToast('Preencha todos campos obrigatórios');
    }
  }

  canPass(){
    for(const a of this.fields){
      if(this.allow.guardian([a.required], true)){
        if(this.allow.guardian([a.answer])){

        } else {
          return false;
        }
      }
    }
    return true;
  }

  upload(object, id, folder){
    const imageUrl = this.crud.callUploadFileStorage(object, id, folder);
    return imageUrl;
  }

  pickFile(event, receiver){
    receiver.answer = event.target.files;
  }

  checkBox(event, object){
    object.answer = this.variableManagment.callInputChangeCheck(event, object);
  }
}
