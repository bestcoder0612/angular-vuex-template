import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScrumboardCard } from '../../interfaces/scrumboard-card.interface';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icAdd from '@iconify/icons-ic/twotone-add';
import { scrumboardLabels, scrumboardUsers } from '../../../../../../static-data/scrumboard';
import icDescription from '@iconify/icons-ic/twotone-description';
import icClose from '@iconify/icons-ic/twotone-close';
import { ScrumboardList } from '../../interfaces/scrumboard-list.interface';
import { Scrumboard } from '../../interfaces/scrumboard.interface';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icImage from '@iconify/icons-ic/twotone-image';
import { ScrumboardAttachment } from '../../interfaces/scrumboard-attachment.interface';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icInsertComment from '@iconify/icons-ic/twotone-insert-comment';
import { DateTime } from 'luxon';
import { ScrumboardComment } from '../../interfaces/scrumboard-comment.interface';
import icStar from '@iconify/icons-ic/twotone-star';

@Component({
  selector: 'vex-scrumboard-dialog',
  templateUrl: './scrumboard-dialog.component.html',
  styleUrls: ['./scrumboard-dialog.component.scss']
})
export class ScrumboardDialogComponent implements OnInit {

  form = this.fb.group({
    title: null,
    description: null,
    dueDate: null,
    cover: null,
    attachments: this.fb.array([]),
    comments: this.fb.array([]),
    users: [],
    labels: []
  });

  commentCtrl = new FormControl();

  icAssignment = icAssignment;
  icDescription = icDescription;
  icClose = icClose;
  icAdd = icAdd;
  icMoreVert = icMoreVert;
  icDelete = icDelete;
  icImage = icImage;
  icAttachFile = icAttachFile;
  icInsertComment = icInsertComment;
  icStar = icStar;

  users = scrumboardUsers;
  labels = scrumboardLabels;

  list: ScrumboardList;
  board: Scrumboard;

  constructor(private dialogRef: MatDialogRef<ScrumboardDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: {
                card: ScrumboardCard;
                list: ScrumboardList;
                board: Scrumboard;
              },
              private fb: FormBuilder) { }

  ngOnInit() {
    this.list = this.data.list;
    this.board = this.data.board;

    const card = this.data.card;

    this.form.valueChanges.subscribe(console.log);

    this.form.patchValue({
      title: card.title,
      description: card.description,
      dueDate: card.dueDate || null,
      cover: card.cover || null,
      users: card.users || [],
      labels: card.labels || []
    });

    this.form.setControl('attachments', this.fb.array(card.attachments || []));
    this.form.setControl('comments', this.fb.array(card.comments || []));
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  isImageExtension(extension: string) {
    return extension === 'jpg' || extension === 'png';
  }

  makeCover(attachment: ScrumboardAttachment) {
    this.form.get('cover').setValue(attachment);
  }

  isCover(attachment: ScrumboardAttachment) {
    return this.form.get('cover').value === attachment;
  }

  remove(attachment: ScrumboardAttachment) {
    if (this.form.get('cover').value && attachment.id === this.form.get('cover').value.id) {
      this.form.get('cover').setValue(null);
    }

    this.form.setControl('attachments', this.fb.array(this.form.get('attachments').value.filter(a => a !== attachment)));
  }

  addComment() {
    if (!this.commentCtrl.value) {
      return;
    }

    const comments = this.form.get('comments') as FormArray;
    comments.push(new FormControl({
      from: {
        name: 'David Smith',
        imageSrc: 'assets/img/avatars/1.jpg'
      },
      message: this.commentCtrl.value,
      date: DateTime.local().minus({ seconds: 1 })
    } as ScrumboardComment));

    this.commentCtrl.setValue(null);
  }
}
