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
    let minECTS = this.filterService.minECTS;
    if (minECTS === undefined || minECTS === null) {
      minECTS = -1000000;
    }

    let maxECTS = this.filterService.maxECTS;
    if (maxECTS === undefined || maxECTS === null) {
      maxECTS = 1000000;
    }

    const newTab = new Array<ICourse>();
    for (const course of args) {
      if (minECTS <= course.ECTS && course.ECTS <= maxECTS) {
        newTab.push(course);
      }
    }
    return newTab;
  }
}
