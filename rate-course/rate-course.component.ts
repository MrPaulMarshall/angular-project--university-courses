import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { KursySerwisService } from '../services/kursy-serwis.service';
import { ICourse } from '../myClasses/ICourse';
import { SigningService } from '../services/signing.service';

@Component({
  selector: 'app-rate-course',
  templateUrl: './rate-course.component.html',
  styleUrls: ['./rate-course.component.css']
})
export class RateCourseComponent implements OnInit {
  indexes = [1, 2, 3, 4, 5];
  markedStar = 0;

  @Input()
  course: ICourse;

  @Output()
  rated = new EventEmitter<string>();

  constructor(private kursySerwis: KursySerwisService, private signing: SigningService) { }

  ngOnInit() {
  }

  ifFull(index: number) {
    return index <= this.markedStar;
  }

  markStars(star: number) {
    this.markedStar = star;
  }

  sendRate(markedStar: number) {
    if (markedStar > 0) {
      this.kursySerwis.modifyRating(this.course, markedStar);
      this.markedStar = 0;
      return this.rated.emit( this.signing.CurrentUser() );
    }
    return this.rated.emit('');
  }
}
