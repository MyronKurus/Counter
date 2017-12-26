import { Component} from '@angular/core';
import {BehaviorService} from './behavior.service';

@Component({
  selector: 'app-buttons',
  template: `
    <div class="buttons">
      <button type="button" (click)="onDecrement()">Decrement</button>
      <button type="button" (click)="onIncrement()">Increment</button>
    </div>
  `
})
export class ButtonsComponent {

  value: number = 0;
  constructor(private behaviorService: BehaviorService) { }

  onIncrement(): void {
    this.behaviorService.operation(++this.value);
  }

  onDecrement(): void {
    this.behaviorService.operation(--this.value);
  }
}
