import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig ={
  apiKey: "AIzaSyDC3paEbJ8G_dfJgMwZFM8DyDLpbbTILqs",
  authDomain: "my-herdlist.firebaseapp.com",
  databaseURL: "https://my-herdlist.firebaseio.com",
  storageBucket: "my-herdlist.appspot.com",
  messagingSenderId: "441678199520"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
