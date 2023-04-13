import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger(
      'valueChanged',
      [
          transition('void => *', []),   // when the item is created
          transition('* => void', []),   // when the item is removed
          transition('* => *', [         // when the item is changed
              animate(800, keyframes([  // animate for 1200 ms
                  style ({ opacity : 0 }),
                  style ({ opacity : 1 }),
              ])),
          ]),
      ]),
  ]
})

export class HomePageComponent implements OnInit{
  
  login:boolean = true;

  constructor(){}

  ngOnInit(): void {
  }

  toggleLogin(){
    this.login = !this.login;
  }
}
