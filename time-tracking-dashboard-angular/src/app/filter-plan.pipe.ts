import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlan'
})
export class FilterPlanPipe implements PipeTransform {

  transform(value: Object, filterBy: string): Object {
    if(!value || !filterBy)
    {
      return value;
    }
    return Object.values(value);
  }

}
