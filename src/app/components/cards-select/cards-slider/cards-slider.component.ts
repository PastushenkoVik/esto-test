import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards-slider',
  templateUrl: './cards-slider.component.html',
  styleUrls: ['./cards-slider.component.scss']
})
export class CardsSliderComponent implements OnInit {
  @Input() cardSlider ;

  shiftClass = {};

  ngOnInit() {
    this.cardSlider.activeDot = 0;
  }

  handlerDotSelect = (newActiveDot) => {
    this.cardSlider.activeDot = newActiveDot;
    this.shiftClass = {
      transform: `translateX(-${100 * newActiveDot}%)`
    };
  }
}
