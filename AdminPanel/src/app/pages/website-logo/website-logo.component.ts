/**
 * Website Logo Page Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-website-logo',
  templateUrl: './website-logo.component.html',
  styleUrls: ['./website-logo.component.scss']
})
export class WebsiteLogoComponent implements OnInit {

  imgsrc: any = '';
  output: any;
  input: any;
  uploadPercent: any;
  success: any;

  constructor(private storage: AngularFireStorage,
    private db: AngularFirestore) { }

  ngOnInit() {
    this.getFile();
  }

  uploadFile(event) {

    const file = event[0];

    // The storage path
    const path = `logos/${Date.now()}_${file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    const task = this.storage.upload(path, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().toPromise().then((data) => {
          this.imgsrc = data;
        });
      })
    ).subscribe((data) => {
      const websiteRef = this.db.collection('website-info').doc('admin');

      websiteRef.set({
        imgsrc: this.imgsrc,
        path: path,
      }, { merge: true }).then(() => {
        this.success = true;

        setTimeout(() => {
          this.success = false;
        }, 3000)
      }).catch((err) => {
        console.log({ err })
      })
    });
  }

  async getFile() {
    const websiteRef = this.db.collection('website-info').doc('admin');
    const doc: any = await websiteRef.get().toPromise();

    if (!doc.exists) {
      console.log('No such document!');
    } else {
      var starsRef = await this.storage.ref(doc.data().path);

      // Get the download URL
      this.imgsrc = await starsRef.getDownloadURL().toPromise();

    }
  }
}

