import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vex-components-overview-grid-list',
  templateUrl: './components-overview-grid-list.component.html',
  styleUrls: ['./components-overview-grid-list.component.scss']
})
export class ComponentsOverviewGridListComponent implements OnInit {

  tiles: any[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  gridListHTML: string =
    `<mat-grid-list cols="4" rowHeight="100px">
  <mat-grid-tile *ngFor="let tile of tiles" [colspan]="tile.cols" [rowspan]="tile.rows"
                  [style.background]="tile.color">
      {{tile.text}}
  </mat-grid-tile>
</mat-grid-list>`;

  constructor() { }

  ngOnInit() {
  }
}
