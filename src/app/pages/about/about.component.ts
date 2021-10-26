import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  skills: Object[] = [
    { name: "Facilitating customer research" },
    { name: "User Interface design for web and mobile apps." },
    { name: "Front-end development: HTML5, CSS3, JavaScript, React, Vue" },
    { name: "Customer Flow diagrams, Wireframes & Prototyping." },
    { name: "Mobile & Web Responsive design." },
    { name: "Proficient with Sketchapp, figma and other prototyping tools." },
    { name: "Web accessibility." },
  ];

  constructor() {}

  ngOnInit() {
    console.log("about page here");
  }
}
