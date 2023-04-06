import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponentComponent } from './accordion/accordion-component/accordion-component.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { BubbleHoverComponent } from './bubble/bubble-hover/bubble-hover.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponentComponent,
    HomePageComponent,
    MenuComponent,
    BubbleHoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
