import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vex-components-overview-progress',
  templateUrl: './components-overview-progress.component.html',
  styleUrls: ['./components-overview-progress.component.scss']
})
export class ComponentsOverviewProgressComponent implements OnInit {

  progressHTML =
    `<mat-progress-bar mode="determinate" [value]="40"></mat-progress-bar>
<mat-progress-bar mode="indeterminate" color="primary"></mat-progress-bar>
<mat-progress-bar mode="buffer" color="accent"></mat-progress-bar>
<mat-progress-bar mode="query" color="warn"></mat-progress-bar>`;

  constructor() {
  }

  ngOnInit() {
  }

}
