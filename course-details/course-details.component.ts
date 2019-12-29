import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../myClasses/ICourse';
import { KursySerwisService } from '../services/kursy-serwis.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SigningService } from '../services/signing.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseId: number;
  course: ICourse;

  constructor(private kursySerwis: KursySerwisService, private route: ActivatedRoute, private signing: SigningService,
              private router: Router) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.courseId = id;
    this.course = this.kursySerwis.getKurs(id);

    if (this.course == null) {
      this.router.navigate(['**']);
    }
  }

  getRating() {
    if (this.course.howManyRates === 0) {
      return 'Brak ocen';
    } else {
      return Math.ceil(100 * this.course.currentRating) / 100;
    }
  }

  sign() {
    this.course.signedUsers.push( this.signing.CurrentUser() );
  }

  whatAboutSigning() {
    // zwraca wartość dla switcha w HTML-u
    if (!this.signing.IsLogged()) {
      // nie jest zalogowany
      return '1';
    } else if (this.course.signedUsers.includes( this.signing.CurrentUser() )) {
      // jest zapisany na kurs
      //    -> tu powinna być możliwość oceny kursu
      return '2';
    } else if (this.course.signedUsers !== undefined && this.course.signedUsers !== null &&
                this.course.signedUsers.length >= this.course.maxStudents) {
      // nie może się zapisać - brak miejsc
      return '3';
    } else {
      // może się zapisać
      return '4';
    }
  }

  // DO POPRAWY
  ifRated() {
    if ( this.signing.IsLogged() && this.course.whoRated.includes( this.signing.CurrentUser() ) ) {
      return true;
    } else {
      return false;
    }
  }

  markRated(email: string) {
    if (email !== null && email !== '') {
      this.course.whoRated.push( email );
    }
  }

  doNothing() {
    console.log('I do nothing');
  }
}
