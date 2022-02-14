import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { ScreenService } from '../../screen-effects/screen.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private afs: AngularFirestore,
    private afst: AngularFireStorage,
    private screen: ScreenService
  )
  {}


  callCollectionConstructor<T>(name){
    return this.collectionConstructor<T>(name);
  }

  private collectionConstructor<T>(name){
    return this.afs.collection<T>(name);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  callGetAll(collection: AngularFirestoreCollection){
    return this.getAll(collection);
  }

  private getAll(collection: AngularFirestoreCollection){
    return collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
    );
   }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  callGet<T>(collection: AngularFirestoreCollection, yourInterface: T, id: string) {
    return this.get(collection, yourInterface, id);
  }

   private get<T>(collection: AngularFirestoreCollection, yourInterface: T, id: string){
     return collection.doc<typeof yourInterface>(id).valueChanges();
   }

   // eslint-disable-next-line @typescript-eslint/member-ordering
   callAdd<T>(collection: AngularFirestoreCollection, yourAsset: T): Promise<any>{
     return this.add(collection, yourAsset);
   }

   private add<T>(collection: AngularFirestoreCollection, yourAsset: T){
     return collection.add(yourAsset);
   }

   // eslint-disable-next-line @typescript-eslint/member-ordering
   callUpdate<T>(collection: AngularFirestoreCollection, yourAsset: T, id: string){
    this.update(collection, yourAsset, id);
   }

   private update<T>(collection: AngularFirestoreCollection, yourAsset: T, id: string){
     return collection.doc<any>(id).update(yourAsset);
   }

   // eslint-disable-next-line @typescript-eslint/member-ordering
   callDelete(collection, id){
     this.delete(collection, id);
   }

   private delete(collection: AngularFirestoreCollection, id: string){
     return collection.doc(id).delete();
   }

   // eslint-disable-next-line @typescript-eslint/member-ordering
   callUploadFileStorage(file, id, folder): Promise<any>{
     return this.uploadFileStorage(file,id,folder);
   }

   private async uploadFileStorage(file, id: string, folder: string): Promise<any>
   {
     if(file && file.length){
       try {
         const task = await this.afst.ref(folder).child(id).put(file[0]);
         return this.afst.ref(folder + '/' + id).getDownloadURL().toPromise();
       } catch (error){
       }
     }
   }

   // eslint-disable-next-line @typescript-eslint/member-ordering
   callDeleteFileStorage(fileRef){
     this.deleteFileStorage(fileRef);
   }

   private async deleteFileStorage(fileRef: string){
    const ref = this.afst.refFromURL(fileRef);
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
