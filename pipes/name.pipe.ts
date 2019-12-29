import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../myClasses/ICourse';
import { FiltrySerwisService } from '../services/filtry-serwis.service';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  constructor(private filterService: FiltrySerwisService) {
  }

  // powinien zwrócić tablice kursów spełniających kryterium
  transform(args: Array<ICourse>): any {
    const newTab = new Array<ICourse>();
    for (const course of args) {
      if (course.name.toLowerCase().includes( this.filterService.name )) {
        newTab.push(course);
      }
    }
    return newTab;
  }
}
