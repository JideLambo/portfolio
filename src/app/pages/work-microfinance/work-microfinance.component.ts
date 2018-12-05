import { Component, OnInit } from '@angular/core';
import { WorksHeroComponent } from './../../components/works-hero/works-hero.component';

@Component({
  selector: 'app-work-microfinance',
  templateUrl: './work-microfinance.component.html',
  styleUrls: ['./work-microfinance.component.scss']
})
export class WorkMicrofinanceComponent implements OnInit {
  heros: Object[];

  constructor() {
    this.heros = [
      {name: 'Micro-Finance Bank', url: '', color: '#000000', mock: 'MFBank.png', mockSm: 'MFBank1.png'}
    ];
   }

  ngOnInit() {
  }

}
