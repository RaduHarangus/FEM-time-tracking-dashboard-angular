import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'time-tracking-dashboard-angular';
  plan: string = '';

  UpdatePlan(plan: string): void {
    this.plan = plan;
  }
}
