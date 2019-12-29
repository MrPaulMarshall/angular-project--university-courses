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
    const newTab = new Array<ICourse>();
    for (const course of args) {
      if (course.teacher.toLowerCase().includes( this.filterService.teacher )) {
        newTab.push(course);
      }
    }
    return newTab;
  }

}
