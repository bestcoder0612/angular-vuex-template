import { Component, OnInit } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';

@Component({
  selector: 'vex-page-layout-card',
  templateUrl: './page-layout-card.component.html',
  styleUrls: ['./page-layout-card.component.scss']
})
export class PageLayoutCardComponent implements OnInit {

  icMoreVert = icMoreVert;

  constructor() { }

  ngOnInit() {
  }

}
