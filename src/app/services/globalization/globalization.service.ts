import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { CacheService } from '../cache/cache.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalizationService {

  private myLang = 'My_Language';
  private path = './../../assets/flags/';

  constructor(
    private translate: TranslateService,
    private cache: CacheService
  ) { }

  async setInitialLanguage(obj?: string){
    let language;
    if(obj){
      language = obj;
    } else {
      language = this.translate.getBrowserLang();
      await this.getLangInCache().then((res => {
        if(res){
          language = res;
        }
      }));
    }
    this.translate.setDefaultLang(language);
    this.cacheSystem(language);
  }

  changeLanguage(obj: string){
    const language = obj;
    this.translate.use(language);
    this.setLangToCache(language);
  }

  getLangs(){
    return [
      { lang: 'English', value: 'en', img: this.path + 'us.png'},
      { lang: 'Português', value: 'pt', img: this.path + 'br.png'},
      { lang: 'Français', value: 'fr', img: this.path + 'fr.png'},
      { lang: 'Español', value: 'es', img: this.path + 'es.png'},
      { lang: 'Italiano', value: 'it', img: this.path + 'it.png'}
    ];
  }

  translateMessage(key: string){
    let message: string;
    this.translate.get(key).subscribe(res => {
      message = res;
    });
    return message;
  }

  private cacheSystem(obj?){
    this.getLangInCache().then((res => {
      if(!res){
        this.setLangToCache(obj);
      }
    }));
  }

  private setLangToCache(obj): Promise<any>{
    return this.cache.setCache(this.myLang, obj);
  }

  private getLangInCache(): Promise<any>{
    return this.cache.getCache(this.myLang);
  }

}
