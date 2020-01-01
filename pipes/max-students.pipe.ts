import { Pipe, PipeTransform } from '@angular/core';
import { FiltrySerwisService } from '../services/filtry-serwis.service';
import { ICourse } from '../myClasses/ICourse';

@Pipe({
  name: 'maxStudents'
})
export class MaxStudentsPipe implements PipeTransform {

  constructor(private filterService: FiltrySerwisService) {
  }

  transform(args: ICourse[]): any {
    let minMaxStudents = this.filterService.minMaxStudents;
    if (minMaxStudents === undefined || minMaxStudents === null) {
      minMaxStudents = 0;
    }

    let maxMaxStudents = this.filterService.maxMaxStudents;
    if (maxMaxStudents === undefined || maxMaxStudents === null) {
      maxMaxStudents = 10000;
    }

    const newTab = new Array<ICourse>();
    for (const course of args) {
      if (minMaxStudents <= course.maxStudents && course.maxStudents <= maxMaxStudents) {
        newTab.push(course);
      }
    }
    return newTab;
  }
}
