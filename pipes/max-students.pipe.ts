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
    const newTab = new Array<ICourse>();
    for (const course of args) {
      if (this.filterService.minMaxStudents <= course.maxStudents && course.maxStudents <= this.filterService.maxMaxStudents) {
        newTab.push(course);
      }
    }
    return newTab;
  }
}
