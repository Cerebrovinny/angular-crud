import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDkClx0CWTC0HEo6Bcz7AJ5BQ2JcEIRCOU",
      authDomain: "angular-crud-bf1b7.firebaseapp.com",
      projectId: "angular-crud-bf1b7",
      storageBucket: "angular-crud-bf1b7.appspot.com",
      messagingSenderId: "662562520429",
      appId: "1:662562520429:web:c59acc40fd570660946e64"
    }),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
