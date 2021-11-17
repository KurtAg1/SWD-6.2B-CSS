import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarkToGradePipe } from './pipes/mark-to-grade.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarkToGradePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
