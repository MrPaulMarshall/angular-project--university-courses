import { Pipe, PipeTransform } from '@angular/core';
import { FiltrySerwisService } from '../services/filtry-serwis.service';
import { ICourse } from '../myClasses/ICourse';

@Pipe({
  name: 'teacher'
})
export class TeacherPipe implements PipeTransform {

  constructor(private filterService: FiltrySerwisService) {
  }

  transform(args: ICourse[]): any {
    if (this.filterService.teacher === undefined || this.filterService.teacher === null || this.filterService.teacher === '') {
      return args;
    }

    const newTab = new Array<ICourse>();
    for (const course of args) {
      if (course.teacher.toLowerCase().includes( this.filterService.teacher.toLowerCase() )) {
        newTab.push(course);
      }
    }
    return newTab;
  }

}
