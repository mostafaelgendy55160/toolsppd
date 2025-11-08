/**
 * Social Links Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {

  facebook: any = '';
  twitter: any = '';
  youtube: any = '';
  success: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.getLinks();
  }

  async getLinks() {
    const websiteRef = this.db.collection('website-info').doc('admin');
    const doc: any = await websiteRef.get().toPromise();

    if (!doc.exists) {
      console.log('No such document!');
    } else {
      this.facebook = doc.data().socialLinks ? doc.data().socialLinks.facebook : '';
      this.twitter = doc.data().socialLinks ? doc.data().socialLinks.twitter : '';
      this.youtube = doc.data().socialLinks ? doc.data().socialLinks.youtube : '';
    }
  }

  save(facebook, twitter, youtube) {
    const websiteRef: any = this.db.collection('website-info').doc('admin');

    websiteRef.set({ socialLinks: { facebook, twitter, youtube } }, { merge: true }).then(() => {
      this.success = true;

      setTimeout(() => {
        this.success = false;
      }, 3000)
    }).catch((err) => {
      console.log({ err })
    })
  }

}
