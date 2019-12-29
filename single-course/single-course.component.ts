import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../myClasses/ICourse';
import { KursySerwisService } from '../services/kursy-serwis.service';
import { SigningService } from '../services/signing.service';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css'],
  providers: [KursySerwisService]
})
export class SingleCourseComponent implements OnInit {
  isSwitched = false;

  @Input()
  course: ICourse;
  @Input()
  odd: boolean;
  @Input()
  index: number;
  @Input()
  full: boolean;

  @Output()
  usunEmitter = new EventEmitter<ICourse>();

  constructor(private kursySerwis: KursySerwisService, private signing: SigningService) {
  }

  ngOnInit() {
  }

  getURL() {
    return this.course.imgURL;
  }

  getRating() {
    if (this.course.howManyRates === 0) {
      return 'Brak ocen';
    } else {
      return Math.ceil(100 * this.course.currentRating) / 100;
    }
  }

  usunSubmit(): void {
    this.usunEmitter.emit(this.course);
  }

  newRate(newRate: number) {
    this.kursySerwis.modifyRating(this.course, newRate);
  }
}
