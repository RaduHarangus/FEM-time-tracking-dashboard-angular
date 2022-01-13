import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-plan-button',
  templateUrl: './plan-button.component.html',
  styleUrls: ['./plan-button.component.less']
})
export class PlanButtonComponent implements OnInit {
  @Input() text?: string;
  @Input() selectedOption?: string;

  @Output() onSelectOption: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: any): void {
    this.onSelectOption.emit(event.target.innerText);
  }

}
