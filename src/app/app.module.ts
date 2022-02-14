import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//  Angular/Fire + Firebase
import { AngularFireModule } from '@angular/fire/compat'; // Main Angular/Fire Component
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Needed if Firestore is going to be used
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // Needed if Storage is going to be used
import { environment } from 'src/environments/environment'; // Firebase Configs

// Cache
import { IonicStorageModule } from '@ionic/storage-angular';

//Globalization
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

//HTTP
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderCustomModule } from './components/header/header-custom/header-custom.module';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    /* AngularFire setup: init of your database **ATTENTION**
    You NEED to setup the src/environments/configFirebase.ts config variable */
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    // Cache System
    IonicStorageModule.forRoot(),
    //Globalization
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
    }),

    //HTTP
    HttpClientModule,

    HeaderCustomModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    // Providers goes here
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
