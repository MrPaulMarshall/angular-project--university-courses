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
    let minCurrentRating = this.filterService.minCurrentRating;
    if (minCurrentRating === undefined || minCurrentRating === null) {
      minCurrentRating = 0;
    }

    let maxCurrentRating = this.filterService.maxCurrentRating;
    if (maxCurrentRating === undefined || maxCurrentRating === null) {
      maxCurrentRating = 5;
    }

    const newTab = new Array<ICourse>();
    for (const course of args) {
      const currRate = course.currentRating;
      if (minCurrentRating <= currRate && currRate <= maxCurrentRating) {
        newTab.push(course);
      }
    }
    return newTab;
  }
}
