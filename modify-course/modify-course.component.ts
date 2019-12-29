import { Component, OnInit } from '@angular/core';
import { ICourse } from '../myClasses/ICourse';
import { KursySerwisService } from '../services/kursy-serwis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SigningService } from '../services/signing.service';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css']
})
export class ModifyCourseComponent implements OnInit {

  teacher = '';
  semester = 0;
  form = '';
  ECTS = 0;
  maxStudents = 0;
  imgURL = '';
  description = '';

  courseId: number;
  course: ICourse;

  constructor(private kursySerwis: KursySerwisService, private route: ActivatedRoute, private signing: SigningService,
              private router: Router) {
  }

  ngOnInit() {
    if ( !this.signing.isAdmin() ) {
      this.router.navigate(['**']);
    } else {
      this.courseId = +this.route.snapshot.paramMap.get('id');
      this.course = this.kursySerwis.getKurs(this.courseId);
    }
  }

  doNothing() {
    console.log('modify-course: I do nothing');
  }

  changeTeacher() {
    if (this.teacher != null && this.teacher !== '') {
      this.course.teacher = this.teacher;
      this.teacher = '';
    }
  }

  changeForm() {
    if (this.form != null && this.form !== '') {
      this.course.form = this.form;
      this.form = '';
    }
  }

  changeSemester() {
    if (this.semester != null && this.semester >= 0) {
      this.course.semester = this.semester;
      this.semester = 0;
    }
  }

  changeECTS() {
    if (this.ECTS != null) {
      this.course.ECTS = this.ECTS;
      this.ECTS = 0;
    }
  }

  changeMaxStudents() {
    if (this.maxStudents != null && this.maxStudents >= 0) {
      this.course.maxStudents = this.maxStudents;
      this.maxStudents = 0;
    }
  }

  changeURL() {
    if (this.imgURL != null && this.imgURL !== '') {
      this.course.imgURL = this.imgURL;
      this.imgURL = '';
    }
  }

  changeDescription() {
    if (this.description != null && this.description !== '') {
      this.course.description = this.description;
      this.description = '';
    }
  }

  deleteKurs(course: ICourse) {
    this.router.navigate(['/dashboard']);
    this.kursySerwis.deleteKurs(course);
  }
}
