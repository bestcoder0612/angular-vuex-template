import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import icSearch from '@iconify/icons-ic/twotone-search';
import icChat from '@iconify/icons-ic/twotone-chat';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { trackById } from '../../../../@vex/utils/track-by';
import { chats } from '../../../../static-data/chats';
import { stagger80ms } from '../../../../@vex/animations/stagger.animation';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icDoNotDisturb from '@iconify/icons-ic/twotone-do-not-disturb';
import icOfflineBolt from '@iconify/icons-ic/twotone-offline-bolt';
import { OnlineStatus } from '../../../../@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component';

export interface Chat {
  id: number;
  imageSrc: string;
  from: string;
  status: string;
  message: string;
  unreadCount: number;
  timestamp: string;
}

export interface ChatMessage {
  id: number;
  from: 'me' | 'partner';
  message: string;
}

@Component({
  selector: 'vex-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class ChatComponent implements OnInit, OnDestroy {

  chats$: Observable<Chat[]> = of(chats).pipe(
    // Fix to allow stagger animations with static data
    delay(0)
  );

  mobileQuery = this.mediaMatcher.matchMedia('(max-width: 1279px)');

  statuses: OnlineStatus[] = [
    {
      id: 'online',
      label: 'Online',
      icon: icCheckCircle,
      colorClass: 'text-green-500'
    },
    {
      id: 'away',
      label: 'Away',
      icon: icAccessTime,
      colorClass: 'text-orange-500'
    },
    {
      id: 'dnd',
      label: 'Do not disturb',
      icon: icDoNotDisturb,
      colorClass: 'text-red-500'
    },
    {
      id: 'offline',
      label: 'Offline',
      icon: icOfflineBolt,
      colorClass: 'text-gray-500'
    }
  ];

  activeStatus: OnlineStatus = this.statuses[0];

  icCheckCircle = icCheckCircle;
  icSearch = icSearch;
  icChat = icChat;
  trackById = trackById;
  private _mobileQueryListener: () => void;

  constructor(private cd: ChangeDetectorRef,
              private mediaMatcher: MediaMatcher) { }

  ngOnInit() {
    this._mobileQueryListener = () => this.cd.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  setStatus(status: OnlineStatus) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
