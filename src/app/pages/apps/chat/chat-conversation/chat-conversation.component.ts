import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Chat, ChatMessage } from '../chat.component';
import { chatMessages } from '../../../../../static-data/chat-messages';
import { trackById } from '../../../../../@vex/utils/track-by';
import { chats } from '../../../../../static-data/chats';
import { map } from 'rxjs/operators';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icSend from '@iconify/icons-ic/twotone-send';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icClearAll from '@iconify/icons-ic/twotone-clear-all';
import icVolumeMute from '@iconify/icons-ic/twotone-volume-mute';
import { fadeInUp400ms, } from '../../../../../@vex/animations/fade-in-up.animation';
import { FormControl, FormGroup } from '@angular/forms';
import { stagger20ms } from '../../../../../@vex/animations/stagger.animation';
import { ScrollbarDirective } from '../../../../../@vex/components/scrollbar/scrollbar.directive';

@Component({
  selector: 'vex-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms,
    stagger20ms
  ]
})
export class ChatConversationComponent implements OnInit, OnDestroy {

  chat: Chat;
  messages: ChatMessage[];

  form = new FormGroup({
    message: new FormControl()
  });

  icAccountCircle = icAccountCircle;
  icClearAll = icClearAll;
  icVolumeMute = icVolumeMute;
  icCheckCircle = icCheckCircle;
  icMoreVert = icMoreVert;
  icSend = icSend;
  trackById = trackById;

  @ViewChild(ScrollbarDirective, { static: true }) scrollbar: ScrollbarDirective;

  constructor(private route: ActivatedRoute,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(paramMap => +paramMap.get('chatId')),
      untilDestroyed(this)
    ).subscribe(chatId => {
      this.messages = [];
      this.cd.detectChanges();
      this.chat = chats.find(chat => chat.id === chatId);
      this.chat.unreadCount = 0;
      this.filterMessages(chatId);
      this.cd.detectChanges();

      this.scrollToBottom();
    });
  }

  filterMessages(id: ChatMessage['id']) {
    this.messages = chatMessages.filter(message => message.id === id);
  }

  send() {
    this.messages.push({
      id: this.chat.id,
      from: 'me',
      message: this.form.get('message').value
    });

    this.form.get('message').setValue('');

    this.cd.detectChanges();
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.scrollbar.scrollbarRef.getScrollElement().scrollTo({
      behavior: 'smooth',
      top: this.scrollbar.scrollbarRef.getContentElement().clientHeight
    });
  }

  ngOnDestroy(): void {}
}
