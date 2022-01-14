import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  plan?: string;

  constructor() { }

  ngOnInit(): void {
    console.log("dashboard plan: ", this.plan);
  }

  updatePlan(plan: string): void {
    this.plan = plan;
    console.log("dashboard update plan: ", this.plan);
  }

}
