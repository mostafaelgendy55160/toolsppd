/**
 * Auth Service
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Injectable, NgZone } from '@angular/core';
import { User } from "./user";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    public afs: AngularFirestore,
    private firebaseAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }


  // Sign in with email/password
  login(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  /* Setting up user data when sign in with email/password
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }


  // Sign out 
  SignOut() {
    return this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['signin']);
    })
  }
}
