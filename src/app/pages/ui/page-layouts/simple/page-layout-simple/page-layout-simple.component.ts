import { Component, OnInit } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';

@Component({
  selector: 'vex-page-layout-simple',
  templateUrl: './page-layout-simple.component.html',
  styleUrls: ['./page-layout-simple.component.scss']
})
export class PageLayoutSimpleComponent implements OnInit {

  icMoreVert = icMoreVert;

  constructor() { }

  ngOnInit() {
  }

}
