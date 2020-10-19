import { Component, Inject, OnInit } from '@angular/core';
import icLaunch from '@iconify/icons-ic/twotone-launch';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Guide } from '../help-center-guides.component';

@Component({
  selector: 'vex-help-center-guides-guide',
  templateUrl: './help-center-guides-guide.component.html',
  styleUrls: ['./help-center-guides-guide.component.scss']
})
export class HelpCenterGuidesGuideComponent implements OnInit {

  icLaunch = icLaunch;
  icClose = icClose;

  constructor(@Inject(MAT_DIALOG_DATA) public guide: Guide) { }

  ngOnInit() {
  }

}
