import { Component, OnInit } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';

@Component({
  selector: 'vex-page-layout-simple-tabbed',
  templateUrl: './page-layout-simple-tabbed.component.html',
  styleUrls: ['./page-layout-simple-tabbed.component.scss']
})
export class PageLayoutSimpleTabbedComponent implements OnInit {

  icMoreVert = icMoreVert;

  constructor() { }

  ngOnInit() {
  }

}
