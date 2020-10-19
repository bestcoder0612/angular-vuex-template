import { Component, OnInit } from '@angular/core';
import icBeenhere from '@iconify/icons-ic/twotone-beenhere';
import icStars from '@iconify/icons-ic/twotone-stars';
import icBusinessCenter from '@iconify/icons-ic/twotone-business-center';

@Component({
  selector: 'vex-help-center-pricing',
  templateUrl: './help-center-pricing.component.html',
  styleUrls: ['./help-center-pricing.component.scss']
})
export class HelpCenterPricingComponent implements OnInit {

  icBeenhere = icBeenhere;
  icStars = icStars;
  icBusinessCenter = icBusinessCenter;

  constructor() { }

  ngOnInit() {
  }

}
