import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BehaviorService} from './bahavior.service';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [BehaviorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
