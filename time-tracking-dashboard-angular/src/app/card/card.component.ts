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
  cards: Card[] = [];
  selectedCard?: Card;
  index: Object = 'weekly';

  constructor(private cardService: CardService, private planService: PlanService) { }

  ngOnInit(): void {
    this.getCards();
    // this.getPlan();
  }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

  onSelect(card: Card): void {
    this.selectedCard = card;
    this.index = 'daily';
    console.log('index changed to: ', this.index);
  }

  // getPlan(): void {
  //   this.planService.getPlan()
  //     .subscribe( plan => this.plan = plan);
  // }

}
