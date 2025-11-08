/**
 * Website Title Page Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-website-title',
  templateUrl: './website-title.component.html',
  styleUrls: ['./website-title.component.scss']
})
export class WebsiteTitleComponent implements OnInit {

  success: boolean = false;
  title: any = '';

  constructor(private db: AngularFirestore) { }

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

  save(title) {
    const websiteRef: any = this.db.collection('website-info').doc('admin');

    websiteRef.set({ title }, { merge: true }).then(() => {
      this.success = true;

      setTimeout(() => {
        this.success = false;
      }, 3000)
    }).catch((err) => {
      console.log({ err })
    })
  }

}
