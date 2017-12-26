import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BehaviorService } from './features/behavior.service';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './features/buttons.component';
import { DisplayComponent } from './features/display.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [BehaviorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
