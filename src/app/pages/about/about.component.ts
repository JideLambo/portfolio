import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: Object[] = [
    { name: 'Research techniques.' },
    { name: 'Flow diagrams & Wireframes.' },
    { name: 'User Interface design.' },
    { name: 'Sketching & Prototyping.' },
    { name: 'HTML5, CSS3, JavaScript.' },
    { name: 'Mobile & Responsive design.' },
    { name: 'Communication and customer facing skills.' },
    { name: 'Proficient with Sketchapp and other prototyping tools.' },
    { name: 'Github and BitBucket version control.' }
  ];

  constructor() { }

  ngOnInit() {
    console.log('about page here');
  }

}
