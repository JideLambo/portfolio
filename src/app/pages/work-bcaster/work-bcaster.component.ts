import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-bcaster',
  templateUrl: './work-bcaster.component.html',
  styleUrls: ['./work-bcaster.component.scss']
})
export class WorkBcasterComponent implements OnInit {
  heros: Object[];

  constructor() {
    this.heros = [
      {name: 'BCaster', url: '', color: '#000000', mock: 'bcaster-mobile.png', mockSm: 'bcaster-dashboard.png'}
    ];
   }

  ngOnInit(): void {
  }

}
