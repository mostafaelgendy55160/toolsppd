import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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

}
