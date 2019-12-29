import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../myClasses/ICourse';
import { FiltrySerwisService } from '../services/filtry-serwis.service';

@Pipe({
  name: 'semester'
})
export class SemesterPipe implements PipeTransform {

  constructor(private filterService: FiltrySerwisService) {
  }
// DO ZROBIENIA
  transform(args: ICourse[]): any {
    const newTab = new Array<ICourse>();
    for (const course of args) {
      if (this.filterService.semesters.includes(course.semester)) {
        newTab.push(course);
      }
    }
    return newTab;
  }

}
