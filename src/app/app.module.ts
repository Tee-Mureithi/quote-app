import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { CountDaysPipe } from './count-days.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    CountDaysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
