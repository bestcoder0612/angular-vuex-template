import { Component, OnInit } from '@angular/core';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { stagger80ms } from '../../../../../@vex/animations/stagger.animation';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-components-button-group',
  templateUrl: './components-button-group.component.html',
  styleUrls: ['./components-button-group.component.scss'],
  animations: [
    stagger80ms,
    scaleIn400ms,
    fadeInRight400ms,
    fadeInUp400ms
  ]
})
export class ComponentsButtonGroupComponent implements OnInit {

  icSettings = icSettings;

  constructor() { }

  ngOnInit() {
  }

}
