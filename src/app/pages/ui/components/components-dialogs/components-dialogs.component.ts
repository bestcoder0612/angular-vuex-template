import { Component, OnInit } from '@angular/core';
import { stagger80ms } from '../../../../../@vex/animations/stagger.animation';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-components-dialogs',
  templateUrl: './components-dialogs.component.html',
  styleUrls: ['./components-dialogs.component.scss'],
  animations: [
    stagger80ms,
    scaleIn400ms,
    fadeInRight400ms,
    fadeInUp400ms
  ]
})
export class ComponentsDialogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
