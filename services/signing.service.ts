import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../myClasses/User';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})


export class SigningService {

  currentUser: string;

  userData: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private route: ActivatedRoute, private router: Router) {
    this.userData = afAuth.authState;
    this.currentUser = null;
  }


  SignUpUser(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      (result) => {
        this.router.navigate(['/login']);
      }
    ).catch( (error) => window.alert(error.message) );
  }

  SignInUser(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      (result) => {
        localStorage.setItem('user', JSON.stringify(result));
        this.currentUser = email;
        // if ( this.checkEmailIfAdmin(email) === true ) {
        this.router.navigate(['/dashboard']);
      }
    ).catch( (error) => { window.alert(error.message); } );
  }

  SignOut() {
    return this.afAuth.auth.signOut().then( () => {
      localStorage.removeItem('user');
      this.currentUser = null;
      // this.router.navigate(['sign-in']);
    });
  }

  // informacje o obecnym użytkowniku
  IsLogged() {
    if (this.currentUser == null || this.currentUser === '') {
      return false;
    } else {
      return true;
    }
  }

  CurrentUser() {
    return this.currentUser;
  }

  // determines if user has matching role
  isAdmin(): boolean {
    if (this.currentUser == null) { return false; }
    if ( this.currentUser.match(/admin[a-zA-Z0-9]*@.*/g) ) {
      return true;
    }
    return false;
  }

  checkEmailIfAdmin(email: string): boolean {
    if (email == null) { return false; }
    if ( email.match(/admin[a-zA-Z0-9]*@.*/g) ) {
      return true;
    }
    return false;
  }

  canEdit(user: User): boolean {
    return this.isAdmin();
  }

  canDelete(user: User): boolean {
    return this.isAdmin();
  }
}

