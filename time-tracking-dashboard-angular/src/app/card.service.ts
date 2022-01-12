import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Card } from './card';
import { CARDS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): Observable<Card[]> {
    const cards = of(CARDS);
    return cards;
  }

  getCard(title: string): Observable<Card> {
    const card = CARDS.find(c => c.title === title)!;
    return of(card);
  }
}
