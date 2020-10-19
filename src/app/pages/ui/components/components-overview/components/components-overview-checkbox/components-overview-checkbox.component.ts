import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vex-components-overview-checkbox',
  templateUrl: './components-overview-checkbox.component.html',
  styleUrls: ['./components-overview-checkbox.component.scss']
})
export class ComponentsOverviewCheckboxComponent implements OnInit {

  checkboxHTML =
    `<mat-checkbox>Checkbox</mat-checkbox>
<mat-checkbox color="primary" [checked]="true">Primary</mat-checkbox>
<mat-checkbox color="accent" [checked]="true">Accent</mat-checkbox>
<mat-checkbox color="warn" [checked]="true">Warn</mat-checkbox>
<mat-checkbox disabled [checked]="true">Disabled</mat-checkbox>
<mat-checkbox [indeterminate]="true">Indeterminate</mat-checkbox>`;

  constructor() {
  }

  ngOnInit() {
  }

}
