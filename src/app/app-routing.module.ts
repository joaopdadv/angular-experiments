import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AccordionComponentComponent } from './accordion/accordion-component/accordion-component.component';
import { BubbleHoverComponent } from './bubble/bubble-hover/bubble-hover.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: "home"},
  {path: 'home', component: HomePageComponent},
  {path: 'accordion', component: AccordionComponentComponent},
  {path: 'bubbles', component: BubbleHoverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
