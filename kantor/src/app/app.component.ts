import {Component, OnInit} from '@angular/core';
import {RateServiceService} from './services/rate-service.service';
import {Exchange} from './models/exchange';


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{

  title = 'Currency-exchange';
  exchange: Exchange;






  name = "this is my Exchange helper";
  items = [
    {
      title: "1 slide label",
      summery: "1 slide label summery",
      url: "https://via.placeholder.com/200?text=first"
    },
    {
      title: "2 slide label",
      summery: "2 slide label summery",
      url: "https://via.placeholder.com/200?text=second"
    },
    {
      title: "3 slide label",
      summery: "3 slide label summery",
      url: "https://via.placeholder.com/200?text=third"
    }
  ];
}

