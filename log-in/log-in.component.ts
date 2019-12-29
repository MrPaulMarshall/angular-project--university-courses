import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { SigningService } from '../services/signing.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;

  constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router, private signing: SigningService) { }

  ngOnInit() {
  }

  SignInUser(email, password) {
    this.email = '';
    this.password = '';
    return this.signing.SignInUser(email, password);
  }
}
