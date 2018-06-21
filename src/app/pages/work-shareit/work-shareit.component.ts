import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-shareit',
  templateUrl: './work-shareit.component.html',
  styleUrls: ['./work-shareit.component.scss']
})
export class WorkShareitComponent implements OnInit {

  heros: Object[];

  constructor() {
    this.heros = [
      {name: 'Share it', url: '', color: '#000000', mock: 'shareit-web.png'}
    ];
  }
  ngOnInit() {
  }

}
