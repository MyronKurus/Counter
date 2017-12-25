import { Component} from '@angular/core';
// import {BehaviorService} from '../bahavior.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  constructor(private store: Store<number>) {}

  onIncrement(): void {
    this.store.dispatch({type: 'INCREMENT'});
  }

  onDecrement(): void {
    this.store.dispatch({type: 'DECREMENT'});
  }

  onReset(): void {
    this.store.dispatch({type: 'RESET'});
  }

  /*value: number = 0;
  constructor(private behaviorService: BehaviorService) { }
  ngOnInit() {
  }

  onIncrement(): void {
    this.behaviorService.operation(++this.value);
  }

  onDecrement(): void {
    this.behaviorService.operation(--this.value);
  }*/
}
