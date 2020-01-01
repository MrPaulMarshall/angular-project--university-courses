import { Pipe, PipeTransform } from '@angular/core';
import { FiltrySerwisService } from '../services/filtry-serwis.service';
import { ICourse } from '../myClasses/ICourse';

@Pipe({
  name: 'form'
})
export class FormPipe implements PipeTransform {

  constructor(private filterService: FiltrySerwisService) {
  }

  // powinien zwrócić tablice kursów spełniających kryterium
  transform(args: ICourse[]): any {
    if (this.filterService.form === undefined || this.filterService.form === null || this.filterService.form === '') {
      return args;
    }

    const newTab = new Array<ICourse>();
    for (const course of args) {
      if (course.form.toLowerCase().includes( this.filterService.form.toLowerCase() )) {
        newTab.push(course);
      }
    }
    return newTab;
  }
}
