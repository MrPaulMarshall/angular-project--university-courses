import { Pipe, PipeTransform } from '@angular/core';
import { FiltrySerwisService } from '../services/filtry-serwis.service';
import { ICourse } from '../myClasses/ICourse';

@Pipe({
  name: 'ECTS'
})
export class ECTSPipe implements PipeTransform {

  constructor(private filterService: FiltrySerwisService) {
  }

  transform(args: ICourse[]): any {
    const newTab = new Array<ICourse>();
    for (const course of args) {
      if (this.filterService.minECTS <= course.ECTS && course.ECTS <= this.filterService.maxECTS) {
        newTab.push(course);
      }
    }
    return newTab;
  }
}
