import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'vex-calendar-edit',
  templateUrl: './calendar-edit.component.html',
  styleUrls: ['./calendar-edit.component.scss']
})
export class CalendarEditComponent implements OnInit {

  form = this.fb.group({
    title: null,
    start: null,
    end: null
  });

  constructor(private dialogRef: MatDialogRef<CalendarEditComponent>,
              @Inject(MAT_DIALOG_DATA) public event: CalendarEvent<any>,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.patchValue(this.event);
  }

  save() {
    this.dialogRef.close({
      ...this.event,
      ...this.form.value
    });
  }
}
