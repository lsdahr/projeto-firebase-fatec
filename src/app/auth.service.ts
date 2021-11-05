import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>
  currentUserEmail: string;
  authError: any;

  constructor(public firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState;
  }

  loginEmail(email: string, password: string) {
    let thisService = this;
    thisService.authError = null;
    this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log("logado com Email e senha");
      this.currentUserEmail = value.user.email;
    }).catch(function(error){
      console.log(error.message);
      thisService.authError = error;
    });
  }

  loginGmail() {
        let thisService = this;
    thisService.authError = null;
    this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(value => {
      console.log("logado com Gmail");
      this.currentUserEmail = value.user.email;
    }).catch(function(error){
      console.log(error.message);
      thisService.authError = error;
    });
  }

  logout() {
    this.firebaseAuth.signOut();
    this.currentUserEmail = null;
  }

}