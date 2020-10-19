import { Component, OnInit } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icDialpad from '@iconify/icons-ic/twotone-dialpad';
import icVoicemail from '@iconify/icons-ic/twotone-voicemail';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';

@Component({
  selector: 'vex-components-overview-menu',
  templateUrl: './components-overview-menu.component.html',
  styleUrls: ['./components-overview-menu.component.scss']
})
export class ComponentsOverviewMenuComponent implements OnInit {

  menuHTML = `<button mat-icon-button [mdMenuTriggerFor]="menu">
  <mat-icon>more_vert</mat-icon>
</button>

<mat-menu #menu="mdMenu">
  <button mat-menu-item>
    <mat-icon> dialpad </mat-icon>
    <span> Redial </span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon> voicemail </mat-icon>
    <span> Check voicemail </span>
  </button>
  <button mat-menu-item>
    <mat-icon> notifications_off </mat-icon>
    <span> Disable alerts </span>
  </button>
</mat-menu>`;

  icMoreVert = icMoreVert;
  icDialpad = icDialpad;
  icVoicemail = icVoicemail;
  icNotificationsOff = icNotificationsOff;

  constructor() { }

  ngOnInit() {
  }
}
