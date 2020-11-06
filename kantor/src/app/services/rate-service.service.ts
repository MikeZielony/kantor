import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Exchange} from '../models/exchange';
import {Rate} from '../models/rate';

@Injectable({
  providedIn: 'root'
})
export class RateServiceService {

  private apiUrl = `https://api.exchangeratesapi.io`;

  constructor(private http: HttpClient) {
  }

  getExchange(base: string): any {
    return this.http.get(`${this.apiUrl}/latest?base=${base}&symbols=GBP,USD,EUR,CHF,JPY`).pipe(
      map(result => {
        let rates: Rate[] = [];

        if (result.hasOwnProperty('rates')) {
          const rateList = Object.values(result.rates);
          const currency = Object.keys(result.rates);
          for (let i = 0; i < currency.length; i++) {
            const rateObject: Rate = {country: currency[i], rate: +rateList[i], flagUrl: `assets/images/${currency[i]}.jpg`};
            rates.push(rateObject);
          }
        }
        let tempObject: Exchange = {
          base: result.base,
          date: result.date,
          rates
        };
        return tempObject;
      }));
  }
  getHistoricalRate(base: string, rate: string): any {
    let start:string = "2019-11-05";
    let finish:string = "2020-11-05";
    return this.http.get(`https://api.exchangeratesapi.io/history?start_at=${start}&end_at=${finish}&base=EUR&symbols=PLN`);
  }

}
