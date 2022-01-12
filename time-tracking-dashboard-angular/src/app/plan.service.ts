import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor() { }

  getPlan(): Observable<string> {
    return of('weekly');
  }
}
