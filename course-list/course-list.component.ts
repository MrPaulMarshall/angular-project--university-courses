import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../myClasses/ICourse';
import { KursySerwisService } from '../services/kursy-serwis.service';
import { SigningService } from '../services/signing.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [KursySerwisService]
})
export class CourseListComponent implements OnInit {

  constructor(private kursySerwis: KursySerwisService, private signing: SigningService) {
  }

  ngOnInit() {
  }

  full() {
    return this.signing.isAdmin();
  }

  getKursy() {
    return this.kursySerwis.getKursy();
  }

}
