import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

var firebaseConfig = {
  	apiKey: "AIzaSyD4TvyqOdgDfOH3CVEe4D1BWeRHeRdMJ90",
    authDomain: "sample-ebe34.firebaseapp.com",
    databaseURL: "https://sample-ebe34.firebaseio.com",
    projectId: "sample-ebe34",
    storageBucket: "sample-ebe34.appspot.com",
    messagingSenderId: "293791227070"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
