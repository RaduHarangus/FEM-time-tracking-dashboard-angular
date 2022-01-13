import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CardService } from "../card.service";
import { Card } from "../card";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.less']
})
export class HeroCardComponent implements OnInit {
  @Output() onUpdatePlan: EventEmitter<string> = new EventEmitter<string>();
  defaultPlan = 'Weekly';
  cards: Card[] = [];
  options: string[] = [];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCards();
    this.options = Object.getOwnPropertyNames(this.cards[0].timeframes);
  }

  getCards() {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

  setActive(option: any): void {

  }

  updatePlan(event: any): void {
    this.defaultPlan = event.target.innerText;
    this.onUpdatePlan.emit(this.defaultPlan);
  }
}
