import { Component, OnInit, Input } from '@angular/core';
import { FiltrySerwisService } from '../services/filtry-serwis.service';
import { SigningService } from '../services/signing.service';

@Component({
  selector: 'app-filter-courses',
  templateUrl: './filter-courses.component.html',
  styleUrls: ['./filter-courses.component.css']
})
export class FilterCoursesComponent implements OnInit {

  name: string;
  teacher: string;
  form: string;
  semester: number;
  minECTS: number;
  maxECTS: number;
  minMaxStudents: number;
  maxMaxStudents: number;
  minCurrentRating: number;
  maxCurrentRating: number;

  constructor(private filterService: FiltrySerwisService, private signing: SigningService) { }

  ngOnInit() {
  }

  sendFilters() {
    this.filterService.setFilters(this.name, this.teacher, this.form,
      this.semester, this.minECTS, this.maxECTS, this.minCurrentRating, this.maxCurrentRating,
      this.minMaxStudents, this.maxMaxStudents
    );
    this.name = null;
    this.teacher = null;
    this.form = null;
    this.semester = null;
    this.minECTS = null;
    this.maxECTS = null;
    this.minCurrentRating = null;
    this.maxCurrentRating = null;
    this.minMaxStudents = null;
    this.maxMaxStudents = null;
  }

  full() {
    return this.signing.isAdmin();
  }
}
