import { Component, OnInit , ChangeDetectionStrategy , Input } from "@angular/core";
import {Exchange} from "../models/exchange";
import {Rate} from "../models/rate";
declare const $:any;
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent  {

  @Input() items: Rate[] = [];

  ngAfterViewInit(){
    $('#carouselExampleCaptions').carousel();
  }
}
