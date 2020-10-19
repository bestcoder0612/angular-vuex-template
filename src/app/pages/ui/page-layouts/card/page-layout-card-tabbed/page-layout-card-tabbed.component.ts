import { Component, OnInit } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';

@Component({
  selector: 'vex-page-layout-card-tabbed',
  templateUrl: './page-layout-card-tabbed.component.html',
  styleUrls: ['./page-layout-card-tabbed.component.scss']
})
export class PageLayoutCardTabbedComponent implements OnInit {

  icMoreVert = icMoreVert;

  constructor() { }

  ngOnInit() {
  }

}
