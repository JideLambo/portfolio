import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-hero',
  templateUrl: './works-hero.component.html',
  styleUrls: ['./works-hero.component.scss']
})
export class WorksHeroComponent implements OnInit {

  heros: Object[];

  constructor() {
    this.heros = [
      {name: '', url: '', color: '#000000', mock: ''}
    ];
  }

  ngOnInit() {
  }

}
