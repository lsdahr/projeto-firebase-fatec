import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyArtlpuEvaEPlWI-gb81GEcFtSCzCRq6Ws",
        authDomain: "angularlist-6923f.firebaseapp.com",
        projectId: "angularlist-6923f",
        storageBucket: "angularlist-6923f.appspot.com",
        messagingSenderId: "310402625876",
        appId: "1:310402625876:web:7b534a9ad78cf611d658c1"
   }
    ), 
    RouterModule.forRoot([
      { path: 'firelist', component: FirelistComponent },
      { path: '', component: IndexComponent },
    ]),
    AngularFireAuthModule,
    AngularFireDatabaseModule
   ],
  declarations: [ AppComponent, HelloComponent, IndexComponent, FirelistComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
