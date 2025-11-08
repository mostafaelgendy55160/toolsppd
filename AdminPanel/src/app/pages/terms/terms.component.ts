/**
 * Terms & Condition Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  content = '';
  success: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.getTermsContent();
  }

  async getTermsContent() {
    const websiteRef = this.db.collection('website-info').doc('admin');
    const doc: any = await websiteRef.get().toPromise();

    if (!doc.exists) {
      console.log('No such document!');
    } else {
      this.content = doc.data().terms;
    }
  }

  save() {
    const websiteRef: any = this.db.collection('website-info').doc('admin');

    websiteRef.set({ terms: this.content }, { merge: true }).then(() => {
      this.success = true;

      setTimeout(() => {
        this.success = false;
      }, 3000)
    }).catch((err) => {
      console.log({ err })
    })
  }

}
