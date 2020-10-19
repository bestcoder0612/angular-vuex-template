import { Component, OnInit } from '@angular/core';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';

@Component({
  selector: 'vex-chat-empty',
  templateUrl: './chat-empty.component.html',
  animations: [scaleFadeIn400ms]
})
export class ChatEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
