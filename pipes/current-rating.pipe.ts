import { Pipe, PipeTransform } from '@angular/core';
import { FiltrySerwisService } from '../services/filtry-serwis.service';
import { ICourse } from '../myClasses/ICourse';

@Pipe({
  name: 'currentRating'
})
export class CurrentRatingPipe implements PipeTransform {

  constructor(private filterService: FiltrySerwisService) {
  }

  transform(args: ICourse[]): any {
    const newTab = new Array<ICourse>();
    for (const course of args) {
      const currRate = course.currentRating;
      if (this.filterService.minCurrentRating <= currRate && currRate <= this.filterService.maxCurrentRating) {
        newTab.push(course);
      }
    }
    return newTab;
  }
}
