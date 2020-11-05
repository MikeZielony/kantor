import {Component, OnInit} from '@angular/core';
import {RateServiceService} from './services/rate-service.service';
import {Exchange} from './models/exchange';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Currency-exchange';
  exchange: Exchange;

  constructor(private service: RateServiceService) {
  }

  ngOnInit(): void {
    this.service.getExchange('PLN').subscribe(result =>this.exchange = result);
  }
}
