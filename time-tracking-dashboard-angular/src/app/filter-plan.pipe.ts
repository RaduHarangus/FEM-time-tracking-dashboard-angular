import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlan'
})
export class FilterPlanPipe implements PipeTransform {

  transform(object: Object, filterBy: string): Object {
    if(!object || !filterBy)
    {
      return object;
    }
    return Object.values(object);
  }
}
