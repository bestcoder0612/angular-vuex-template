import { Component, OnInit } from '@angular/core';
import icFormatAlignLeft from '@iconify/icons-ic/twotone-format-align-left';
import icFormatAlignCenter from '@iconify/icons-ic/twotone-format-align-center';
import icFormatAlignRight from '@iconify/icons-ic/twotone-format-align-right';
import icFormatAlignJustify from '@iconify/icons-ic/twotone-format-align-justify';

@Component({
  selector: 'vex-components-overview-button-group',
  templateUrl: './components-overview-button-group.component.html',
  styleUrls: ['./components-overview-button-group.component.scss']
})
export class ComponentsOverviewButtonGroupComponent implements OnInit {

  buttonToggleHTML =
    `<mat-button-toggle-group>
  <mat-button-toggle value="left">
    <mat-icon [icIcon]="icFormatAlignLeft"></mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="center">
    <mat-icon [icIcon]="icFormatAlignCenter"></mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="right">
    <mat-icon [icIcon]="icFormatAlignRight"></mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="justify">
    <mat-icon [icIcon]="icFormatAlignJustify"></mat-icon>
  </mat-button-toggle>
</mat-button-toggle-group>

<mat-button-toggle-group class="mt-6">
  <mat-button-toggle value="left">Left</mat-button-toggle>
  <mat-button-toggle value="center">Center</mat-button-toggle>
  <mat-button-toggle value="right">Right</mat-button-toggle>
</mat-button-toggle-group>

<mat-button-toggle-group class="mt-6" appearance="legacy">
  <mat-button-toggle value="left">Left</mat-button-toggle>
  <mat-button-toggle value="center">Center</mat-button-toggle>
  <mat-button-toggle value="right">Right</mat-button-toggle>
</mat-button-toggle-group>

<mat-button-toggle-group class="mt-6" vertical>
  <mat-button-toggle value="left">Top</mat-button-toggle>
  <mat-button-toggle value="center">Center</mat-button-toggle>
  <mat-button-toggle value="right">Bottom</mat-button-toggle>
</mat-button-toggle-group>`;

  icFormatAlignLeft = icFormatAlignLeft;
  icFormatAlignCenter = icFormatAlignCenter;
  icFormatAlignRight = icFormatAlignRight;
  icFormatAlignJustify = icFormatAlignJustify;

  constructor() { }

  ngOnInit() {
  }

}
