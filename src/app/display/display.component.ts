import { Component, OnDestroy } from '@angular/core';
import {BehaviorService} from '../bahavior.service';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

interface AppState {
  value: number;
}
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  value: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.value = this.store.select(state => state);
  }

  /*value: any = 0;
  subscription: Subscription;

  constructor(private behaviorService: BehaviorService) {
    this.subscription = this.behaviorService.getValue()
      .subscribe(value => {
        this.value = value;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }*/

}
