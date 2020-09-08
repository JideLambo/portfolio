import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recent-work",
  templateUrl: "./recent-work.component.html",
  styleUrls: ["./recent-work.component.scss"],
})
export class RecentWorkComponent implements OnInit {
  works: Object[] = [
    {
      url: "bcaster-dashboard",
      name: "BCaster OY, Finland",
      desc:
        "First scalable, channel-independent platform for brands to activate and engage users.",
      img: "ICC-Dashboard-banner.png",
      color: "#162447",
    },
    {
      url: "GIGM",
      name: "GIGM.com",
      desc: "Changing the road transport system approach in Nigeria",
      img: "gigm-web.png",
      color: "rgb(250, 211, 224)",
    },
    {
      url: "couponcooler",
      name: "Coupon Cooler",
      desc: "Coupon deals, and discount for shoppers on mobile experience",
      img: "couponcooler.png",
      color: "#fdf182",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
