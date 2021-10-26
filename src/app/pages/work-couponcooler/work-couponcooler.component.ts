import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-couponcooler',
  templateUrl: './work-couponcooler.component.html',
  styleUrls: ['./work-couponcooler.component.scss']
})
export class WorkCouponcoolerComponent implements OnInit {
  heros: Object[];

  constructor() {
    this.heros = [
      {name: 'Coupon Cooler', url: '', color: '#000000', mock: 'couponcooler1.png', mockSm: 'couponcooler2.png'}
    ];
   }

  ngOnInit() {
  }

}
