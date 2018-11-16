import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private fire:AngularFireAuth , private db: AngularFireDatabase, private router: Router) { }


  authState: any = null;

  get authenticated(): boolean {
    return this.authState !== null;
  }
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  email:string = '';
  password:string = '';
 

  ngOnInit() {}

  
  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.socialSignIn(provider);
  }
  
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider()
    return this.socialSignIn(provider);
  }

  twitterLogin(){
    const provider = new firebase.auth.TwitterAuthProvider()
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
   
    return this.fire.auth.signInWithPopup(provider)
      .then((credential) =>  {
          this.fire = credential.user
          this.updateUserData(credential.user.email, credential.user.displayName, credential.user.uid, credential.user.photoURL)
          
      })
      .catch(error => console.log(error));
  }
  
  private updateUserData(email, name, uid, photoURL): void {
    console.log(uid)
    localStorage.setItem('uid',uid)
    localStorage.setItem('isLoggedIn','true')
      let path = `users/${uid}`;
      let data = {
                    uid: uid,
                    email: email,
                    name: name,
                    photoURL: photoURL
                  }
  
      this.db.object(path).update(data)
      .catch(error => console.log(error));
      window.location.href="./dashboard"
  
    }

}