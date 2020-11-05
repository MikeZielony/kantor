import {Component, OnInit} from '@angular/core';
import {Exchange} from './models/exchange';
import {RateServiceService} from "./services/rate-service.service";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{

  exchange: Exchange;
  title = 'Currency-exchange';

  name = "this is my Exchange helper";


  constructor(private rateService: RateServiceService) {
  }

  ngOnInit(): void {
    this.rateService.getExchange('PLN').subscribe( result => {
      this.exchange = result;
      console.log(this.exchange);

    });
  }

}

