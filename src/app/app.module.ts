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



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    /* AngularFire setup */
    AngularFireModule.initializeApp(environment.firebase), // <-- Init of your database
    AngularFirestoreModule,                                // **ATTENTION** You NEED to setup the
    AngularFireStorageModule                               // src/environments/configFirebase.ts config variable
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    // Providers goes here
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
