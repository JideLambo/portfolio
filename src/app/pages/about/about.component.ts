import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  skills: Object[] = [
    { name: "Research techniques." },
    { name: "Flow diagrams & Wireframes." },
    { name: "User Interface development: HTML5, CSS3, JavaScript" },
    { name: "Sketching & Prototyping." },
    { name: "Mobile & Responsive design." },
    { name: "Proficient with Sketchapp and other prototyping tools." },
    { name: "Github version control." },
  ];

  constructor() {}

  ngOnInit() {
    console.log("about page here");
  }
}
