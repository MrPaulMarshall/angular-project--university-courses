import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../myClasses/ICourse';
import { FiltrySerwisService } from '../services/filtry-serwis.service';

@Pipe({
  name: 'semester'
})
export class SemesterPipe implements PipeTransform {

  constructor(private filterService: FiltrySerwisService) {
  }

  transform(args: ICourse[]): any {
    if (this.filterService.semester === undefined || this.filterService.semester === null) {
      return args;
    }

    const newTab = new Array<ICourse>();
    for (const course of args) {
      if (this.filterService.semester === course.semester) {
        newTab.push(course);
      }
    }
    return newTab;
  }

}
