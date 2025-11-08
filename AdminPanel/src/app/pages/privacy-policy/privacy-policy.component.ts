/**
 * Privacy Policy Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  content = '';
  success: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.getPrivacyPolicyContent();
  }

  async getPrivacyPolicyContent() {
    const websiteRef = this.db.collection('website-info').doc('admin');
    const doc: any = await websiteRef.get().toPromise();

    if (!doc.exists) {
      console.log('No such document!');
    } else {
      this.content = doc.data().privacyPolicy;
    }
  }

  save() {
    const websiteRef: any = this.db.collection('website-info').doc('admin');

    websiteRef.set({ privacyPolicy: this.content }, { merge: true }).then(() => {
      this.success = true;

      setTimeout(() => {
        this.success = false;
      }, 3000)
    }).catch((err) => {
      console.log({ err })
    })
  }
}
