import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-gtpay',
  templateUrl: './work-gtpay.component.html',
  styleUrls: ['./work-gtpay.component.scss']
})
export class WorkGtpayComponent implements OnInit {

  heros: Object[];

  constructor() {
    this.heros = [
      {name: 'GTPay', url: '', color: '#000000', mock: 'gtpay-web.png', mockSm: 'gtpay-mobile.png'}
    ];
   }

  ngOnInit() {
  }

}
