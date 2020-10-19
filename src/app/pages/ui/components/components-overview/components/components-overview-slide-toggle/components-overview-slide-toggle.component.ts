import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vex-components-overview-slide-toggle',
  templateUrl: './components-overview-slide-toggle.component.html',
  styleUrls: ['./components-overview-slide-toggle.component.scss']
})
export class ComponentsOverviewSlideToggleComponent implements OnInit {

  slideToggleHTML = `<mat-slide-toggle [checked]="true"></mat-slide-toggle>
<mat-slide-toggle color="primary" [checked]="true"></mat-slide-toggle>
<mat-slide-toggle color="accent" [checked]="true"></mat-slide-toggle>
<mat-slide-toggle color="warn" [checked]="true"></mat-slide-toggle>
<mat-slide-toggle disabled></mat-slide-toggle>`;

  constructor() {
  }

  ngOnInit() {
  }

}
