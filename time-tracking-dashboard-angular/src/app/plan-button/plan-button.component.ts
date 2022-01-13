import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan-button',
  templateUrl: './plan-button.component.html',
  styleUrls: ['./plan-button.component.less']
})
export class PlanButtonComponent implements OnInit {
  @Input() text?:string;
  selectedOption: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: any, text: any): void {
    this.selectedOption = event.target.innerText;
    this.displayAll();
  }

  displayAll(): void {
    const buttons = document.getElementsByClassName('plan-btn');
    console.log(buttons);
    // console.log('text: ', text);
    // console.log('selectedOption: ', this.selectedOption);
    // console.log('equality: ', text === this.selectedOption);
  }

}
