import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import icViewHeadline from '@iconify/icons-ic/twotone-view-headline';
import { contactsData } from '../../../../../../static-data/contacts';
import { Icon } from '@visurel/iconify-angular';
import { Contact } from '../../interfaces/contact.interface';
import { fadeInRight400ms } from '../../../../../../@vex/animations/fade-in-right.animation';
import icHistory from '@iconify/icons-ic/twotone-history';
import icStar from '@iconify/icons-ic/twotone-star';
import icLabel from '@iconify/icons-ic/twotone-label';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import { stagger40ms } from '../../../../../../@vex/animations/stagger.animation';

export interface ContactsTableMenu {
  type: 'link' | 'subheading';
  id?: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business';
  icon?: Icon;
  label: string;
  classes?: {
    icon?: string;
  };
}

@Component({
  selector: 'vex-contacts-table-menu',
  templateUrl: './contacts-table-menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class ContactsTableMenuComponent implements OnInit {

  @Input() items: ContactsTableMenu[] = [
    {
      type: 'link',
      id: 'all',
      icon: icViewHeadline,
      label: 'All Contacts'
    },
    {
      type: 'link',
      id: 'frequently',
      icon: icHistory,
      label: 'Frequently contacted'
    },
    {
      type: 'link',
      id: 'starred',
      icon: icStar,
      label: 'Starred'
    },
    {
      type: 'subheading',
      label: 'Labels'
    },
    {
      type: 'link',
      id: 'family',
      icon: icLabel,
      label: 'Family',
      classes: {
        icon: 'text-primary-500'
      }
    },
    {
      type: 'link',
      id: 'friends',
      icon: icLabel,
      label: 'Friends',
      classes: {
        icon: 'text-green-500'
      }
    },
    {
      type: 'link',
      id: 'colleagues',
      icon: icLabel,
      label: 'Colleagues',
      classes: {
        icon: 'text-amber-500'
      }
    },
    {
      type: 'link',
      id: 'business',
      icon: icLabel,
      label: 'Business',
      classes: {
        icon: 'text-gray-500'
      }
    },
  ];

  @Output() filterChange = new EventEmitter<Contact[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: ContactsTableMenu['id'] = 'all';
  icPersonAdd = icPersonAdd;

  constructor() { }

  ngOnInit() {
  }

  setFilter(category: ContactsTableMenu['id']) {
    this.activeCategory = category;

    if (category === 'starred') {
      return this.filterChange.emit(contactsData.filter(c => c.starred));
    }

    if (category === 'all') {
      return this.filterChange.emit(contactsData);
    }

    if (category === 'frequently'
      || category === 'family'
      || category === 'friends'
      || category === 'colleagues'
      || category === 'business') {
      return this.filterChange.emit([]);
    }
  }

  isActive(category: ContactsTableMenu['id']) {
    return this.activeCategory === category;
  }
}
