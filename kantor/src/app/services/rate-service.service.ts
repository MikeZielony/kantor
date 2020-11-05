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
    return this.http.get(`${this.apiUrl}/latest?base=${base}&symbols=USD,EUR,CHF`).pipe(
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
}
