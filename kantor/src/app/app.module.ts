import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import {GoogleChartsModule} from "angular-google-charts";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CarouselComponent } from './carousel/carousel.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,GoogleChartsModule],
  declarations: [ AppComponent, HelloComponent, CarouselComponent, ChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
