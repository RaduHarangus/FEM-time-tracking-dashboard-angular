import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { PlanService } from "../plan.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() plan?: string;
  // defaultPlan = 'Weekly';
  // plan: string = 'default plan';
  cards: Card[] = [];
  selectedCard?: Card;

  constructor(private cardService: CardService, private planService: PlanService) { }

  ngOnInit(): void {
    this.getCards();
    this.getPlan();
  }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

  onSelect(card: Card): void {
    this.selectedCard = card;
  }

  getPlan(): void {
    this.planService.getPlan()
      .subscribe( plan => this.plan = plan);
  }

}
