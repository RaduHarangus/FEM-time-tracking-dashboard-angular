import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private planSource = new BehaviorSubject('weekly');
  currentPlan = this.planSource.asObservable();

  constructor() { }

  changePlan(newPlan: string): void {
    this.planSource.next(newPlan);
  }
}
