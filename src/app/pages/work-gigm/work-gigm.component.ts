import { Component, OnInit } from '@angular/core';
import { WorksHeroComponent } from './../../components/works-hero/works-hero.component';

@Component({
  selector: 'app-work-gigm',
  templateUrl: './work-gigm.component.html',
  styleUrls: ['./work-gigm.component.scss']
})
export class WorkGigmComponent implements OnInit {
  heros: Object[];

  constructor() {
    this.heros = [
      {name: 'GIGM', url: '', color: '#000000', mock: 'gigm-web.png', mockSm: 'gigm-mobile.png'}
    ];
   }

  ngOnInit() {
  }

}
