import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KursySerwisService } from '../services/kursy-serwis.service';
import { Course } from '../myClasses/Course';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  providers: [KursySerwisService]
})
export class CreateCourseComponent implements OnInit {
  licznik = 0;
  name = '';
  teacher = '';
  semester = 0;
  form = '';
  ECTS = 0;
  maxStudents = 0;
  imgURL = '';
  description = '';

  @Output()
  formSend = new EventEmitter<boolean>();

  constructor(private kursySerwis: KursySerwisService) { }

  ngOnInit() {
  }

  addCourse() {
    const newCourse = new Course(this.name, this.teacher, this.semester, this.form, this.ECTS, this.maxStudents,
      this.imgURL, this.description, 0, 0, new Array<string>(), new Array<string>());
    this.kursySerwis.addKurs(newCourse);
    this.name = '';
    this.teacher = '';
    this.semester = 0;
    this.form = '';
    this.ECTS = 0;
    this.maxStudents = 0;
    this.imgURL = '';
    this.description = '';
    this.formSend.emit(false);
  }
}
