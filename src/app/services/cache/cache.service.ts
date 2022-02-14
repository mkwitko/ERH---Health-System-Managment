import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CacheCheckTerms } from 'src/app/interfaces/cache/cache-check-terms';
import { ScreenService } from '../screen-effects/screen.service';

@Injectable({
  providedIn: 'root'
})

export class CacheService {

  public checkUser: CacheCheckTerms = {};
  public acceptPrivacy = {ref: false};
  public acceptTerms = {ref: false};


  constructor(
    private storage: Storage,
    private screen: ScreenService
  )
  {
    this.iniStorage();
  }

  async iniStorage(){
    await this.storage.create();
  }

  checkCache(){
    try {
      this.storage.get('privacy').then((resPrivacy) => {
        if(resPrivacy !== null){
          if(resPrivacy === 'false' && this.checkUser.privacy === 'true'){
            this.storage.set('privacy', 'true');
          } else if (resPrivacy === 'true' && this.checkUser.privacy === 'false'){
            this.checkUser.privacy = 'true';
            this.enforceCache();
          }
        } else {
          this.initUserCheck();
        }
        });
      this.storage.get('terms').then((resTerms) => {
        if(resTerms !== null){
          if(resTerms === 'false' && this.checkUser.terms === 'true'){
            this.storage.set('terms', 'true');
          } else if (resTerms === 'true' && this.checkUser.terms === 'false'){
            this.checkUser.terms = 'true';
            this.enforceCache();
          }
        } else {
          this.initUserCheck();
        }
        });
    } catch (error){
      //this.screen.presentErrorToast(error);
    }
  }

  setCache(obj: string, value: string): Promise<any>{
    return this.storage.set(obj, value);
  }

  getCache(obj: string): Promise<any>{
    return this.storage.get(obj);
  }

  enforceCache(){
    if(this.acceptPrivacy.ref === false &&
      this.checkUser.privacy === 'true'){
        this.acceptPrivacy.ref = true;
      }
      if(this.acceptTerms.ref === false &&
        this.checkUser.terms === 'true'){
          this.acceptTerms.ref = true;
      }
  }

  initUserCheck(){
    this.storage.set('privacy', 'false');
    this.storage.set('terms', 'false');
  }
}
