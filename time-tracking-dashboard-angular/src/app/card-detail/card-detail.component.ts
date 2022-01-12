import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Card } from '../card';
import { CardService } from "../card.service";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.less']
})
export class CardDetailComponent implements OnInit {
  @Input() card?: Card;
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    const title = String(this.route.snapshot.paramMap.get('title'));
    this.cardService.getCard(title)
      .subscribe(card => this.card = card);
  }
}