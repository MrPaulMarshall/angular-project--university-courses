import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { SigningService } from '../services/signing.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email: string;
  password: string;
  repeatPassword: string;

  constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router, private signing: SigningService) { }

  ngOnInit() {
  }

  SignUpUser(email, password) {
    if (password !== this.repeatPassword) {
      this.password = '';
      this.repeatPassword = '';
      window.alert('Niewłaściwe hasło');
      return;
    }
    this.email = '';
    this.password = '';
    this.repeatPassword = '';
    return this.signing.SignUpUser(email, password);
  }
}
