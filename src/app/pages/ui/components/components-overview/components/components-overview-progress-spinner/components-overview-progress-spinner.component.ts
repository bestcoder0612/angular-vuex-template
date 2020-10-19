import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vex-components-overview-progress-spinner',
  templateUrl: './components-overview-progress-spinner.component.html',
  styleUrls: ['./components-overview-progress-spinner.component.scss']
})
export class ComponentsOverviewProgressSpinnerComponent implements OnInit {

  progressSpinnerHTML = `<mat-progress-spinner mode="determinate" [value]="40"></mat-progress-spinner>
<mat-progress-spinner mode="indeterminate" color="accent"></mat-progress-spinner>`;

  constructor() {
  }

  ngOnInit() {
  }

}
