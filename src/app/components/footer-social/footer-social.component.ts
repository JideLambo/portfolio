import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: ['./footer-social.component.scss']
})
export class FooterSocialComponent implements OnInit {

  socials: Object[] = [
    {name: 'Medium', url: 'https://medium.com/@jidelambo'},
    {name: 'Twitter', url: 'https://twitter.com/jidelambo'},
    {name: 'Linkedin', url: 'https://www.linkedin.com/in/jidelambo/'},
    {name: 'Email', url: 'mailto:jidelambo@gmail.com'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
