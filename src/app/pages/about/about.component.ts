import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: Object[] = [
    { name: 'Research techniques' },
    { name: 'User modeling—persona and scenario creation' },
    { name: 'Flow diagrams & Wireframes' },
    { name: 'Product design' },
    { name: 'Interface design' },
    { name: 'Sketching & Prototyping' },
    { name: 'HTML5, CSS3, JavaScript, Angular, Typescript, and Ionic Framework' },
    { name: 'Mobile & Responsive design' },
    { name: 'Communication and customer facing skills' },
    { name: 'Proficient with Sketchapp' },
    { name: 'Proficient with Invisionapp' },
    { name: 'Communication and customer facing skills' },
    { name: 'Github and BitBucket version control' }
  ];

  constructor() { }

  ngOnInit() {
    console.log('about page here');
  }

}
