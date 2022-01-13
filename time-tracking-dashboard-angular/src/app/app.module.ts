import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReplacePipe } from './replace.pipe';
import { PlanButtonComponent } from './plan-button/plan-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FooterComponent,
    HeroCardComponent,
    CardDetailComponent,
    DashboardComponent,
    ReplacePipe,
    PlanButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
