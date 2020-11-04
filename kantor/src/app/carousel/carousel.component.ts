import {Component, Input} from "@angular/core";
import {Exchange} from "../models/exchange";

declare const $: any;

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],

})
export class CarouselComponent {

  @Input() items = [];
  @Input() exchange: Exchange;


  ngAfterViewInit() {
    $('#carouselExampleCaptions').carousel()
  }
}
