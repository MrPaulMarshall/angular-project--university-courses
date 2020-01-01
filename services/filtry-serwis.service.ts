import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltrySerwisService {

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

  constructor() { }

  setFilters(name: string, teacher: string, form: string, semester: number, minECTS: number, maxECTS: number,
             minCurrentRating: number, maxCurrentRating: number, minMaxStudents: number, maxMaxStudents: number
  ) {
    this.name = name;
    this.teacher = teacher;
    this.form = form;

    this.semester = semester;

    this.minECTS = minECTS;
    this.maxECTS = maxECTS;

    this.minCurrentRating = minCurrentRating;
    this.maxCurrentRating = maxCurrentRating;

    this.minMaxStudents = minMaxStudents;
    this.maxMaxStudents = maxMaxStudents;
  }
}
