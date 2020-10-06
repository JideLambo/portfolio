import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  skills: Object[] = [
    { name: "UX Thinking & Research techniques." },
    { name: "User Interface design for web and mobile apps." },
    { name: "User Interface development: HTML5, CSS3, JavaScript." },
    { name: "Flow diagrams, Wireframes & Prototyping." },
    { name: "Mobile & Responsive design." },
    { name: "Proficient with Sketchapp, figma and other prototyping tools." },
    { name: "User testing & web accessibility." },
  ];

  constructor() {}

  ngOnInit() {
    console.log("about page here");
  }
}
