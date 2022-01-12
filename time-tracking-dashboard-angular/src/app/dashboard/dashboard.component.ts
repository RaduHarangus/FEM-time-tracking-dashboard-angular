import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  plan: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  UpdatePlan(plan: string): void {
    this.plan = plan;
    console.log('from app: ', this.plan);
  }

}
