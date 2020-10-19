import { Component, OnInit } from '@angular/core';
import { stagger80ms } from '../../../../../@vex/animations/stagger.animation';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import icSettings from '@iconify/icons-ic/twotone-settings';

@Component({
  selector: 'vex-components-autocomplete',
  templateUrl: './components-autocomplete.component.html',
  styleUrls: ['./components-autocomplete.component.scss'],
  animations: [
    stagger80ms,
    scaleIn400ms,
    fadeInRight400ms,
    fadeInUp400ms
  ]
})
export class ComponentsAutocompleteComponent implements OnInit {

  icSettings = icSettings;

  constructor() { }

  ngOnInit() {
  }

}
