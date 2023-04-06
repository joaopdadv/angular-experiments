import { Component, OnInit } from '@angular/core';
import { Bubble } from 'src/app/models/bubble.model';

@Component({
  selector: 'app-bubble-hover',
  templateUrl: './bubble-hover.component.html',
  styleUrls: ['./bubble-hover.component.css']
})
export class BubbleHoverComponent implements OnInit{

  bubbles: Bubble[] = [];



  constructor(){

  }

  ngOnInit(): void {
    for (let index = 0; index < 100; index++) {
      this.bubbles.push({size: 200, offsetX: 0, offsetY: 0})    
    }
  }
  
}
