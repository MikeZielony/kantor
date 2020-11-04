import { Component, OnInit , ChangeDetectionStrategy , Input } from "@angular/core";
declare const $:any;
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent  {

  @Input() items = [];


  ngAfterViewInit(){
    $('#carouselExampleCaptions').carousel()
  }
}
