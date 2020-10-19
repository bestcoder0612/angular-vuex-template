import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vex-components-overview-slider',
  templateUrl: './components-overview-slider.component.html',
  styleUrls: ['./components-overview-slider.component.scss']
})
export class ComponentsOverviewSliderComponent implements OnInit {

  sliderHTML = `<mat-slider min="1" max="10" thumbLabel tickInterval="1"></mat-slider>`;

  constructor() {
  }

  ngOnInit() {
  }
}
