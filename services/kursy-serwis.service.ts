import { Injectable } from '@angular/core';
import { ICourse } from '../myClasses/ICourse';
import mockCourses from '../../assets/mock_data/mock-courses.json';

@Injectable({
  providedIn: 'root'
})
export class KursySerwisService {
  courseList: Array<ICourse>;
  currentMarked: ICourse;

  constructor() {
    this.courseList = mockCourses;
    this.currentMarked = null;
  }

  getKursy() {
    return this.courseList;
  }

  getKurs(i: number) {
    return this.courseList[i];
  }

  addKurs(course: ICourse) {
    this.courseList.push(course);
  }

  deleteKurs(course: ICourse) {
    const i = this.courseList.indexOf(course, 0);
    if (i > -1) {
      this.courseList.splice(i, 1);
    }
  }

  getCurrentMarked() {
    return this.currentMarked;
  }

  setCurrentMarked(newCourse: ICourse) {
    if (this.currentMarked === newCourse) {
      this.currentMarked = null;
    } else {
      this.currentMarked = newCourse;
    }
  }

  modifyRating(course: ICourse, newRate: number) {
    course.currentRating = (course.currentRating * course.howManyRates + newRate) / (course.howManyRates + 1);
    course.howManyRates = course.howManyRates + 1;
  }

  // funkcje do zmiany wartości pól:
  
}
