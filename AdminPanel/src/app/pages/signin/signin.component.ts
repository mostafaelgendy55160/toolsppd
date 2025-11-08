/**
 * SignIn Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  title: any = '';

  constructor(private db: AngularFirestore,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.getTitle();
  }

  async getTitle() {
    const websiteRef = this.db.collection('website-info').doc('admin');
    const doc: any = await websiteRef.get().toPromise();

    if (!doc.exists) {
      console.log('No such document!');
    } else {
      this.title = doc.data().title;
    }
  }


  login(email, password) {
    this.authService.login(email, password);
  }
}
