import {Component, OnInit} from '@angular/core';
import {RateServiceService} from './services/rate-service.service';
import {Exchange} from './models/exchange';


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent  {
  title = 'Currency-exchange';
  exchange: Exchange;


 items = [
    {
      title: "this.exchange.rates[0].country",
      summery:  "this.exchange.rates[0].rate",
      url: "https://via.placeholder.com/200?text=first"
    },
    {
      title: "this.exchange.rates[1].country",
      summery:  "this.exchange.rates[1].rate",
      url: "https://via.placeholder.com/200?text=second"
    },
    {
      title: "this.exchange.rates[2].country",
      summery:  "this.exchange.rates[2].rate",
      url: "https://via.placeholder.com/200?text=third"
    }
    ];

  constructor(private service: RateServiceService) {
  }

  ngOnInit(): void {
    this.service.getExchange('PLN').subscribe(result =>this.exchange = result);
  }
}



