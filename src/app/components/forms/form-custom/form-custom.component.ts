import { InputChangesService } from './../../../services/variables-management/input-changes.service';
import { Component, Input } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AllowToPassService } from 'src/app/services/allow-to-pass/allow-to-pass.service';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { UnsubService } from 'src/app/services/unsub/unsub.service';

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
  @Input() reset: boolean = false;

  constructor(
    private allow: AllowToPassService,
    private screen: ScreenService,
    private nav: NavigationService,
    private crud: CrudService,
    private variableManagment: InputChangesService,
    private unsub: UnsubService
  ){}

  async submit(){

    // Photo Holder
    let holdPhoto;

    if(this.canPass()){
      try
      {
        // try {
        //   this.delete().then((res => {
        //     console.log(res);
        //   }))
        // } catch (error){
        //   console.error(error);
        // }

        // Send to database fields
        const send = this.myFunction(this.fields)

        // if has photo
        if(send.logo){
          holdPhoto = send.logo;
          send.logo = '';
        }
 
        // Add to Database
        this.crud.callAdd(this.collection, send).then((res) => {
          console.log(res);
          // Upload System
          if(holdPhoto){
            this.crud.callUploadFileStorage(holdPhoto, res.id, this.ref).then((down) => {
              send.logo = down;
              this.crud.callUpdate(this.collection, send, res.id);
            });
          }
          // Update To Fill Id
          send.id = res.id;
          this.crud.callUpdate(this.collection, send, res.id)
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

  delete(): Promise<any>{
    if(this.reset === true){
      const sub = this.crud.callGetAll(this.collection).subscribe(res => {
          for(const a of res){
            this.crud.callDelete(this.collection, a.id);
            this.crud.callDeleteFileStorage(a.id, this.ref);
            console.log('Deleting...');
          }
          this.unsub.unsub([sub]);
        }
      )
    }
    return;
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

  pickFile(event, receiver){
    receiver.answer = event.target.files;
    console.log(receiver.answer);
  }

  checkBox(event, object){
    object.answer = this.variableManagment.callInputChangeCheck(event, object);
  }
}
