import { Component, OnDestroy } from '@angular/core';
import {BehaviorService} from './behavior.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-display',
  template: '<p>{{value}}</p>'
})
export class DisplayComponent implements OnDestroy {

  value: any = 0;
  subscription: Subscription;

  constructor(private behaviorService: BehaviorService) {
    this.subscription = this.behaviorService.getValue()
      .subscribe(value => {
        this.value = value;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
