import {Rate} from './rate';

export interface Exchange {
  base: string;
  date: string;
  rates: Rate[];

}
