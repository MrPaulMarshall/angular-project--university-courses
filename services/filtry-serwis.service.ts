import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltrySerwisService {

  name: string;
  teacher: string;
  form: string;
  semesters: number[];
  minECTS: number;
  maxECTS: number;
  minMaxStudents: number;
  maxMaxStudents: number;
  minCurrentRating: number;
  maxCurrentRating: number;

  constructor() { }

  setFilters(name: string, teacher: string, form: string, semesters: string, minECTS: number, maxECTS: number,
             minCurrentRating: number, maxCurrentRating: number, minMaxStudents: number, maxMaxStudents: number
  ) {
    this.name = name;
    this.teacher = teacher;
    this.form = form;
    // tablice trzeba najpierw wyczyścić
    this.semesters = [];
    const tempArr = semesters.split(',');
    for (const elem of tempArr) {
      this.semesters.push(+elem);
    }

    // N jest ogranicznikiem wartości liczbowych
    const N = 10000;
    this.minECTS = minECTS;
    if (this.minECTS === null) {
      this.minECTS = 0;
    }
    this.maxECTS = maxECTS;
    if (this.maxECTS === null) {
      this.maxECTS = N;
    }

    this.minCurrentRating = minCurrentRating;
    if (this.minCurrentRating === null) {
      this.minCurrentRating = 1;
    }
    this.maxCurrentRating = maxCurrentRating;
    if (this.maxCurrentRating === null) {
      this.maxCurrentRating = 5;
    }

    this.minMaxStudents = minMaxStudents;
    if (this.minMaxStudents === null) {
      this.minMaxStudents = 0;
    }
    this.maxMaxStudents = maxMaxStudents;
    if (this.maxMaxStudents === null) {
      this.maxMaxStudents = N;
    }
  }
}
