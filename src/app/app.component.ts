import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        Welcome to {{ title }}!
      </h1>
      <app-display></app-display>
      <app-buttons></app-buttons>
    </div>
  `
})
export class AppComponent {
  title = 'Counter App';
}


