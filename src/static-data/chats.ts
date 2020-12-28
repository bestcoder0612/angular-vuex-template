import { DateTime } from 'luxon';
import { Chat } from '../app/pages/apps/chat/chat.component';

export const chats: Chat[] = [
  {
    id: 1,
    imageSrc: 'assets/img/avatars/1.jpg',
    from: 'David Smith',
    status: 'Online',
    message: 'You did great with the last presentation, looking forward to working with you on the next project.',
    unreadCount: 5,
    timestamp: DateTime.local().minus({ minutes: 10 }).toRelative()
  },
  {
    id: 2,
    imageSrc: 'assets/img/avatars/2.jpg',
    from: 'Jason Miller',
    status: 'last seen: 2 hours ago',
    message: 'Great, thanks a lot! 👌',
    unreadCount: 2,
    timestamp: DateTime.local().minus({ minutes: 54 }).toRelative()
  },
  {
    id: 3,
    imageSrc: 'assets/img/avatars/3.jpg',
    from: 'Arnold Schwarz',
    status: 'last seen: 5 hours ago',
    message: 'Sure! I\'ll remind you tomorrow, hope we can get this ready!',
    unreadCount: 4,
    timestamp: DateTime.local().minus({ hours: 2 }).toRelative()
  },
  {
    id: 4,
    imageSrc: 'assets/img/avatars/4.jpg',
    from: 'Jennifer van Holden',
    status: 'Online',
    message: 'Thanks! 👍👍👍',
    unreadCount: 0,
    timestamp: DateTime.local().minus({ hours: 8 }).toRelative()
  },
  {
    id: 5,
    imageSrc: 'assets/img/avatars/5.jpg',
    from: 'Annie Liefers',
    status: 'Online',
    message: 'Wow 😲, you won\'t guess what I just saw, it\'s incredible!',
    unreadCount: 0,
    timestamp: DateTime.local().minus({ day: 1 }).toRelative()
  },
  {
    id: 6,
    imageSrc: 'assets/img/avatars/6.jpg',
    from: 'Frank Sinners',
    status: 'last seen: 2 hours ago',
    message: 'Get ready for the presentation, we will rock this!',
    unreadCount: 0,
    timestamp: DateTime.local().minus({ day: 1 }).toRelative()
  },
  {
    id: 7,
    imageSrc: 'assets/img/avatars/7.jpg',
    from: 'James Prealier',
    status: 'last seen: 43 minutes ago',
    message: 'No way! I\'m excited to see the progress you did!',
    unreadCount: 0,
    timestamp: DateTime.local().minus({ day: 2 }).toRelative()
  },
  {
    id: 8,
    imageSrc: 'assets/img/avatars/8.jpg',
    from: 'Victoria Zendia',
    status: 'Online',
    message: 'Hope to see you again soon 💋',
    unreadCount: 0,
    timestamp: DateTime.local().minus({ day: 2 }).toRelative()
  },
  {
    id: 9,
    imageSrc: 'assets/img/avatars/9.jpg',
    from: 'Jonathan Leing',
    status: 'Online',
    message: 'Happy Birthday! 🎉🎉🎉',
    unreadCount: 0,
    timestamp: DateTime.local().minus({ day: 30 }).toRelative()
  },
  {
    id: 10,
    imageSrc: 'assets/img/avatars/10.jpg',
    from: 'Jonathan Leing',
    status: 'last seen: 1 day ago',
    message: 'Happy birthday bro 🎉🎉🎉',
    unreadCount: 0,
    timestamp: DateTime.local().minus({ day: 30 }).toRelative()
  }
];
