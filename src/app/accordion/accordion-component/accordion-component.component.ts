import { Component, OnInit } from '@angular/core';
import { Panel } from 'src/app/models/panel.model';

@Component({
  selector: 'app-accordion-component',
  templateUrl: './accordion-component.component.html',
  styleUrls: ['./accordion-component.component.css']
})
export class AccordionComponentComponent implements OnInit{

  panels: Panel[] = [
    {
      id: 0,
      labelId: "label1",
      labelExpanded: true,
      labelSvg: "../assets/accordion/lightning.svg",
      labelText: "Lightning",
      contentId: "content1",
      contentHidden: false,
      contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis vel ipsum porttitor posuere vitae quis dui.",
      contentImg: "../assets/accordion/lightning.jpg",
      contentImgAlt: "Lightning striking at night time",
    },
    {
      id: 1,
      labelId: "label2",
      labelExpanded: false,
      labelSvg: "../assets/accordion/fish.svg",
      labelText: "Fishing",
      contentId: "content2",
      contentHidden: true,
      contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis vel ipsum porttitor posuere vitae quis dui.",
      contentImg: "../assets/accordion/fish.jpg",
      contentImgAlt: "People fishing on sunset",
    },
    {
      id: 2,
      labelId: "label3",
      labelExpanded: false,
      labelSvg: "../assets/accordion/anchor.svg",
      labelText: "Boating",
      contentId: "content3",
      contentHidden: true,
      contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis vel ipsum porttitor posuere vitae quis dui.",
      contentImg: "../assets/accordion/anchor.jpg",
      contentImgAlt: "Boat anchor",
    },
    {
      id: 3,
      labelId: "label4",
      labelExpanded: false,
      labelSvg: "../assets/accordion/tree.svg",
      labelText: "Trees",
      contentId: "content4",
      contentHidden: true,
      contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis vel ipsum porttitor posuere vitae quis dui.",
      contentImg: "../assets/accordion/tree.jpg",
      contentImgAlt: "forest",
    },
    {
      id: 4,
      labelId: "label5",
      labelExpanded: false,
      labelSvg: "../assets/accordion/water.svg",
      labelText: "Fishing",
      contentId: "content5",
      contentHidden: true,
      contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis vel ipsum porttitor posuere vitae quis dui.",
      contentImg: "../assets/accordion/water.jpg",
      contentImgAlt: "sea",
    },

  ];

  constructor(){

  }
  ngOnInit(): void {

  }


  getAccordion(id:number){
    this.panels.forEach(panel => {
      if(panel.id == id){
        panel.labelExpanded = true;
      }else{
        panel.labelExpanded = false;
      }
    });
  }
}
