import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, OnDestroy {
  plan?: string;
  subscription?: Subscription;

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.subscription = this.planService.currentPlan.subscribe(plan => this.plan = plan);
  }

  updatePlan(plan: string): void {
    this.plan = plan;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
