import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { getInfos } from './verifyandgetlogin.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-verifyandgetlogin',
  templateUrl: './verifyandgetlogin.component.html',
  styleUrls: ['./verifyandgetlogin.component.css']
})
export class VerifyandgetloginComponent implements OnInit {
  public myUid: any;
  lol: string;

  constructor(private fire: AngularFireAuth, private db: AngularFireDatabase) {
    this.myUid = localStorage.getItem('uid');
    this.lol = 'lolol';
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        localStorage.setItem('uid', user.uid);
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        window.location.href = './';
      }
    });
  }
  return() {
    this.lol;
  }
}
