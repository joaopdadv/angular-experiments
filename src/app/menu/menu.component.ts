import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  currentRoute!: string;

  home!: boolean;
  accordion!: boolean;
  poker!: boolean;

  constructor(private location: Location){

  }


  ngOnInit(): void {
    this.currentRoute = this.location.path();

    this.location.onUrlChange((url) => {
      switch (url) {
        case '#/home':
          this.home = true;
          this.accordion = false;
          this.poker = false;
          break;
        case '':
          this.home = true;
          this.accordion = false;
          this.poker = false;
          break;
        case '#/accordion':
          this.home = false;
          this.accordion = true;
          this.poker = false;
          break;
        case '#/poker':
          this.home = false;
          this.accordion = false;
          this.poker = true;
          break;
        default:
          break;
      }
    })
  }


}
