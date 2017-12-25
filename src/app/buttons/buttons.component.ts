import { Component, OnInit } from '@angular/core';
import {BehaviorService} from '../bahavior.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  value: number = 0;
  constructor(private behaviorService: BehaviorService) { }
  ngOnInit() {
  }

  onIncrement(): void {
    this.behaviorService.operation(++this.value);
  }

  onDecrement(): void {
    this.behaviorService.operation(--this.value);
  }
}
