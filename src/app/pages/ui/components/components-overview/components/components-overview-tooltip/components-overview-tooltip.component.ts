import { Component, OnInit } from '@angular/core';
import icFavorite from '@iconify/icons-ic/twotone-favorite';

@Component({
  selector: 'vex-components-overview-tooltip',
  templateUrl: './components-overview-tooltip.component.html',
  styleUrls: ['./components-overview-tooltip.component.scss']
})
export class ComponentsOverviewTooltipComponent implements OnInit {

  tooltipHTML = `<button mat-icon-button matTooltip="Favorite this">
  <mat-icon>favorite</mat-icon>
</button>`;

  icFavorite = icFavorite;

  constructor() { }

  ngOnInit() {
  }
}
