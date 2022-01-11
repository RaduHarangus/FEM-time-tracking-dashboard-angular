import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.less']
})
export class HeroCardComponent implements OnInit {
  @Output() onUpdatePlan: EventEmitter<string> = new EventEmitter<string>();
  defaultPlan = 'Weekly';
  constructor() { }

  ngOnInit(): void {
  }

  updatePlan(event: any): void {
    this.defaultPlan = event.target.innerText;
    console.log(this.defaultPlan);
    this.onUpdatePlan.emit(this.defaultPlan);
  }
}
