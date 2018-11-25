import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask
} from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class GetinfosService {
  email: string;
  myid: string;
  itemList: AngularFireList<any>;
  dataUser: string[] = [];
  userUid: string;
  itemArray = [];

  data = {
    uid: '',
    name: '',
    email: '',
    photoURL: ''
  };

  userKey: any;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(
    private afStorage: AngularFireStorage,
    public db: AngularFireDatabase
  ) {}
  getinfos() {
    this.email = localStorage.getItem('email');
    this.myid = localStorage.getItem('uid');

    this.itemList = this.db.list('users');

    this.itemList.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const y = action.payload.toJSON();
        y['$key'] = action.key;

        if (action.payload.child('uid').val() === this.myid) {
          this.userKey = action.key;
          this.itemArray.push(y as ListItemClass);
          this.data.uid = this.itemArray[0]['uid'];
          this.data.name = this.itemArray[0]['name'];
          this.data.email = this.itemArray[0]['email'];
          this.data.photoURL = this.itemArray[0]['photoURL'];
        }
      });
    });
    return this.data;
  }
}
export class ListItemClass {
  uid: string;
  $key: string;
  name: string;
  email: string;
}
