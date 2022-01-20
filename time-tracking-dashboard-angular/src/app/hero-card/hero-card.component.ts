import {Component, EventEmitter, OnDestroy, OnInit, Output, Input } from '@angular/core';
import { CardService } from "../card.service";
import { Card } from "../card";
import {Subscription} from "rxjs";
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.less']
})
export class HeroCardComponent implements OnInit, OnDestroy {
  @Input() plan?: string;
  @Output() onUpdatePlan: EventEmitter<string> = new EventEmitter<string>();
  selectedOption:string = '';
  cards: Card[] = [];
  options: string[] = [];
  // plan?: string;
  subscription?: Subscription;

  constructor(private cardService: CardService, private planService: PlanService) { }

  ngOnInit(): void {
    this.getCards();
    this.options = Object.getOwnPropertyNames(this.cards[0].timeframes);
    this.subscription = this.planService.currentPlan.subscribe(plan => this.plan = plan);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getCards() {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

  selectOption(option: string): void {
    this.planService.changePlan(option);
    this.selectedOption = option;
    this.onUpdatePlan.emit(option);
  }
}
