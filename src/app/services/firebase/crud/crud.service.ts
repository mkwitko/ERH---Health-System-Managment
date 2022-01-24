import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs';
import { ScreenService } from '../../screen-effects/screen.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private afs: AngularFireStorage,
    private screen: ScreenService
  ) { }

  getAll(collection: AngularFirestoreCollection){
    return collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
    );
   }

   get<T>(collection: AngularFirestoreCollection, yourInterface: T, id: string){
     return collection.doc<typeof yourInterface>(id).valueChanges();
   }

   add<T>(collection: AngularFirestoreCollection, yourAsset: T){
     return collection.add(yourAsset);
   }

   update<T>(collection: AngularFirestoreCollection, yourInterface: T, yourAsset: T, id: string){
     return collection.doc<typeof yourInterface>(id).update(yourAsset);
   }

   delete(collection: AngularFirestoreCollection, id: string){
     return collection.doc(id).delete();
   }

   async uploadFileStorage(file: string, id: string, folder: string): Promise<any>
   {
     if(file && file.length){
       try {
         const task = await this.afs.ref(folder).child(id).put(file[0]);
         return this.afs.ref(folder + '/' + id).getDownloadURL().toPromise();
       } catch (error){
         console.error(error);
       }
     }
   }

   async deleteFileStorage(fileRef: string){
    const ref = this.afs.refFromURL(fileRef);
    await this.screen.presentLoading();
    try {
      await ref.delete();
      this.screen.loading.dismiss();
    } catch (error){
      this.screen.presentToast(error.message);
      this.screen.loading.dismiss();
    }
  }
}
