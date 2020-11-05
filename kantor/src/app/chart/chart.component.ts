import {Component, OnInit} from '@angular/core';
import {DataChart} from "../models/dataChart";
import {RateServiceService} from "../services/rate-service.service";
import {Exchange} from "../models/exchange";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  exchange: Exchange;
  dataChart: DataChart;

  title = `Currency:  to PLN `;
  type = 'LineChart';
  data = [];
  columnNames = ['Data', 'values'];
  options = {colors: ['#e0440e',], is3D: true};
  width = 1068;
  height = 800;


  constructor(private rateService: RateServiceService) {
  }

  ngOnInit(): void {
    this.getHistoricalRateUsingSubscribe();
  }

  getHistoricalRateUsingSubscribe(): void {

      this.rateService.getHistoricalRate("PLN", "GBP").subscribe((data: DataChart) => {
        this.dataChart = data;
        const dates = Object.keys(this.dataChart.rates);
        const rates = Object.values(this.dataChart.rates);

        for (let i = 0; i < rates.length; i++) {
          this.data.push([dates[i], Object.values(rates[i])[0]])
        }
        this.data.sort(((a: number, b: number) => a > b ? 1 : -1));
      })
  }
}
