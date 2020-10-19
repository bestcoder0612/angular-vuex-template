import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { contactsData } from '../../../../../../static-data/contacts';
import icStar from '@iconify/icons-ic/twotone-star';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icEmail from '@iconify/icons-ic/twotone-mail';
import icPerson from '@iconify/icons-ic/twotone-person';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import { FormBuilder } from '@angular/forms';
import { Contact } from '../../interfaces/contact.interface';

export let contactIdCounter = 50;

@Component({
  selector: 'vex-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.scss']
})
export class ContactsEditComponent implements OnInit {

  form = this.fb.group({
    name: null,
    email: null,
    phone: null,
    company: null,
    notes: null,
    birthday: null
  });

  contact: Contact;

  icStar = icStar;
  icStarBorder = icStarBorder;
  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icBusiness = icBusiness;
  icPerson = icPerson;
  icEmail = icEmail;
  icPhone = icPhone;

  constructor(@Inject(MAT_DIALOG_DATA) private contactId: Contact['id'],
              private dialogRef: MatDialogRef<ContactsEditComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    if (this.contactId) {
      this.contact = contactsData.find(c => c.id === this.contactId);
      this.form.patchValue(this.contact);
    }
  }

  toggleStar() {
    if (this.contact) {
      this.contact.starred = !this.contact.starred;
    }
  }

  save() {
    const form = this.form.value;

    if (!this.contact) {
      this.contact = {
        ...form,
        id: contactIdCounter++
      };
    }

    this.contact.name = form.name;
    this.contact.email = form.email;
    this.contact.phone = form.phone;
    this.contact.company = form.company;
    this.contact.notes = form.notes;
    this.contact.birthday = form.birthday;

    this.dialogRef.close();
  }
}
