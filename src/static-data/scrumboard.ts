import { ScrumboardUser } from '../app/pages/apps/scrumboard/interfaces/scrumboard-user.interface';
import { ScrumboardLabel } from '../app/pages/apps/scrumboard/interfaces/scrumboard-label.interface';
import { Scrumboard } from '../app/pages/apps/scrumboard/interfaces/scrumboard.interface';
import { DateTime } from 'luxon';
import { ScrumboardAttachment } from '../app/pages/apps/scrumboard/interfaces/scrumboard-attachment.interface';
import { ScrumboardComment } from '../app/pages/apps/scrumboard/interfaces/scrumboard-comment.interface';
import theme from '../@vex/utils/tailwindcss';

export const scrumboardAttachments: ScrumboardAttachment[] = [
  {
    id: 1,
    name: 'business-case.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/1.jpg',
    size: '55 KB'
  },
  {
    id: 2,
    name: 'laptop.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/2.jpg',
    size: '62 KB'
  },
  {
    id: 3,
    name: 'how-to.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/3.jpg',
    size: '35 KB'
  },
  {
    id: 4,
    name: 'workplace.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/4.jpg',
    size: '51 KB'
  },
  {
    id: 5,
    name: 'issue-332.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/5.jpg',
    size: '10 KB'
  },
  {
    id: 6,
    name: 'notebook-26.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/6.jpg',
    size: '48 KB'
  },
  {
    id: 7,
    name: 'business-2.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/7.jpg',
    size: '58 KB'
  },
  {
    id: 7,
    name: 'example-67.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/8.jpg',
    size: '87 KB'
  }
];

export const scrumboardUsers: ScrumboardUser[] = [
  {
    name: 'David Smith',
    imageSrc: 'assets/img/avatars/1.jpg'
  },
  {
    name: 'Michael Bolta',
    imageSrc: 'assets/img/avatars/2.jpg'
  },
  {
    name: 'Jenny Zents',
    imageSrc: 'assets/img/avatars/3.jpg'
  },
  {
    name: 'Donald Orisan',
    imageSrc: 'assets/img/avatars/4.jpg'
  },
  {
    name: 'Frank Uhrzeen',
    imageSrc: 'assets/img/avatars/5.jpg'
  },
  {
    name: 'James Blound',
    imageSrc: 'assets/img/avatars/6.jpg'
  },
  {
    name: 'Peter Moffeen',
    imageSrc: 'assets/img/avatars/7.jpg'
  }
];

export const scrumboardComments: ScrumboardComment[] = [
  {
    from: scrumboardUsers[0],
    date: DateTime.local().minus({ days: 2, minutes: 43 }),
    message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
  },
  {
    from: scrumboardUsers[1],
    date: DateTime.local().minus({ days: 4, minutes: 43 }),
    message: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
  },
  {
    from: scrumboardUsers[2],
    date: DateTime.local().minus({ days: 1, minutes: 43 }),
    message: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'
  },
  {
    from: scrumboardUsers[3],
    date: DateTime.local().minus({ days: 0, minutes: 27 }),
    message: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.'
  },
  {
    from: scrumboardUsers[4],
    date: DateTime.local().minus({ hour: 2, minutes: 4 }),
    message: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.'
  }
];

export const scrumboardLabels: ScrumboardLabel[] = [
  {
    label: 'High Priority',
    background: theme.colors.amber['500'],
    color: theme.textColor['amber-contrast']['500'],
  },
  {
    label: 'Blocked',
    background: theme.colors.red['500'],
    color: theme.textColor['red-contrast']['500'],
  },
  {
    label: 'Approved',
    background: theme.colors.green['500'],
    color: theme.textColor['green-contrast']['600'],
  },
  {
    label: 'Ready',
    background: theme.colors.cyan['500'],
    color: theme.textColor['cyan-contrast']['500'],
  },
  {
    label: 'Deployed',
    background: theme.colors.purple['500'],
    color: theme.textColor['purple-contrast']['500'],
  }
];

export const scrumboards: Scrumboard[] = [
  {
    id: 1,
    label: 'Tech Startup Board',
    children: [
      {
        id: 1,
        label: 'Backlog',
        children: [
          {
            id: 11,
            title: 'Fix Issue #332',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            dueDate: {
              date: DateTime.local().plus({ days: 5 }),
              done: true
            },
            attachments: [
              scrumboardAttachments[0],
              scrumboardAttachments[1],
              scrumboardAttachments[2],
            ],
            comments: [
              scrumboardComments[0],
              scrumboardComments[1],
              scrumboardComments[2],
            ],
            users: [
              scrumboardUsers[0],
              scrumboardUsers[1],
              scrumboardUsers[2],
            ],
            labels: [
              scrumboardLabels[0],
              scrumboardLabels[1],
            ],
            cover: scrumboardAttachments[0]
          },
          {
            id: 12,
            title: 'Create new User Profiles',
            comments: [
              scrumboardComments[4],
              scrumboardComments[3]
            ],
            users: [
              scrumboardUsers[1],
            ]
          },
          {
            id: 13,
            title: 'Add Dashboard',
            description: '',
            attachments: [
              scrumboardAttachments[2],
              scrumboardAttachments[3]
            ],
            users: [
              scrumboardUsers[2],
              scrumboardUsers[3],
            ],
            labels: [
              scrumboardLabels[3]
            ],
            comments: [
              scrumboardComments[0]
            ],
            cover: scrumboardAttachments[2]
          },
          {
            id: 14,
            title: 'Improve User Onboarding',
            labels: [
              scrumboardLabels[0],
              scrumboardLabels[2]
            ]
          },
          {
            id: 5,
            title: 'Create new All-In-One Widget',
            description: 'This widget has superpowers and can display all the great things you love and want in life.',
            attachments: [
              scrumboardAttachments[4],
              scrumboardAttachments[1]
            ],
            users: [
              scrumboardUsers[5],
              scrumboardUsers[4],
            ],
            labels: [
              scrumboardLabels[4],
              scrumboardLabels[0],
              scrumboardLabels[2]
            ],
            cover: scrumboardAttachments[1]
          },
        ]
      },
      {
        id: 2,
        label: 'Hot Backlog',
        children: [
          {
            id: 21,
            title: 'Create Support Center',
            comments: [
              scrumboardComments[4],
              scrumboardComments[2],
              scrumboardComments[1],
              scrumboardComments[0]
            ],
            labels: [
              scrumboardLabels[0],
              scrumboardLabels[3]
            ],
            users: [
              scrumboardUsers[1],
              scrumboardUsers[0],
              scrumboardUsers[2]
            ]
          },
          {
            id: 22,
            title: 'Add Forgot Password functionality',
            dueDate: {
              date: DateTime.local().plus({ days: 2 }),
              done: false
            },
            attachments: [
              scrumboardAttachments[1],
              scrumboardAttachments[3],
            ],
            users: [
              scrumboardUsers[0],
              scrumboardUsers[3]
            ],
            cover: scrumboardAttachments[3]
          },
          {
            id: 23,
            title: 'Make America Great Again',
            labels: [
              scrumboardLabels[1]
            ]
          },
          {
            id: 24,
            title: 'Create new Design Prototypes',
            dueDate: {
              date: DateTime.local().plus({ days: 7 }),
              done: true
            },
            labels: [
              scrumboardLabels[0],
              scrumboardLabels[3]
            ],
            users: [
              scrumboardUsers[4],
              scrumboardUsers[1]
            ],
            attachments: [
              scrumboardAttachments[4],
              scrumboardAttachments[0]
            ],
            cover: scrumboardAttachments[4]
          }
        ]
      },
      {
        id: 3,
        label: 'In Progress',
        children: [
          {
            id: 31,
            title: 'Add new Material Design 2 Icons',
            attachments: [
              scrumboardAttachments[1],
              scrumboardAttachments[0],
              scrumboardAttachments[6],
              scrumboardAttachments[2]
            ],
            comments: [
              scrumboardComments[0],
            ],
            cover: scrumboardAttachments[6]
          },
          {
            id: 32,
            title: 'Improve Dashboard Grid',
            comments: [
              scrumboardComments[4],
            ],
            users: [
              scrumboardUsers[2],
              scrumboardUsers[1],
              scrumboardUsers[0]
            ]
          },
          {
            id: 33,
            title: 'Use Google Fonts',
            dueDate: {
              date: DateTime.local().plus({ days: 2 }),
              done: false
            },
            labels: [
              scrumboardLabels[3]
            ],
            attachments: [
              scrumboardAttachments[1],
              scrumboardAttachments[5],
              scrumboardAttachments[2]
            ],
            comments: [
              scrumboardComments[0],
              scrumboardComments[4],
              scrumboardComments[2],
            ],
            users: [
              scrumboardUsers[0],
              scrumboardUsers[3],
              scrumboardUsers[2]
            ],
            cover: scrumboardAttachments[5]
          }
        ]
      },
      {
        id: 4,
        label: 'Ready to Deploy',
        children: [
          {
            id: 41,
            title: 'Add Meta Description',
            dueDate: {
              date: DateTime.local().plus({ days: 2 }),
              done: false
            },
            labels: [
              scrumboardLabels[0],
              scrumboardLabels[2]
            ],
            attachments: [
              scrumboardAttachments[5],
              scrumboardAttachments[6]
            ],
            users: [
              scrumboardUsers[2],
            ]
          },
          {
            id: 42,
            title: 'Redesign Homepage',
            labels: [
              scrumboardLabels[3]
            ],
            attachments: [
              scrumboardAttachments[5]
            ],
            comments: [
              scrumboardComments[4]
            ],
            users: [
              scrumboardUsers[0],
              scrumboardUsers[4]
            ]
          },
          {
            id: 43,
            title: 'Work on SEO',
            dueDate: {
              date: DateTime.local().plus({ days: 1 }),
              done: true
            },
            attachments: [
              scrumboardAttachments[7]
            ],
            cover: scrumboardAttachments[7],
            users: [
              scrumboardUsers[4]
            ],
            comments: [
              scrumboardComments[2]
            ]
          },
          {
            id: 44,
            title: 'Create new Side-Navigation',
            attachments: [
              scrumboardAttachments[0],
            ],
            cover: scrumboardAttachments[0],
            users: [
              scrumboardUsers[3],
              scrumboardUsers[2]
            ]
          },
          {
            id: 45,
            title: 'Participate in Design Contest',
            users: [
              scrumboardUsers[1],
              scrumboardUsers[0]
            ],
            comments: [
              scrumboardComments[0]
            ],
            labels: [
              scrumboardLabels[0]
            ]
          }
        ]
      }
    ]
  }
];
