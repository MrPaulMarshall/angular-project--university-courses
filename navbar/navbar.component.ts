import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { SigningService } from '../services/signing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private signing: SigningService) { }

  ngOnInit() {
  }

  SignOut() {
    return this.signing.SignOut();
  }

  IsLogged() {
    return this.signing.IsLogged();
  }

  ShowUser() {
    return this.signing.currentUser;
  }
}
