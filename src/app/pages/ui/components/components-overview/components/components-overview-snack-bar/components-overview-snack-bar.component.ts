import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'vex-components-overview-snack-bar',
  templateUrl: './components-overview-snack-bar.component.html',
  styleUrls: ['./components-overview-snack-bar.component.scss']
})
export class ComponentsOverviewSnackBarComponent implements OnInit {

  snackbarHTML = `<button mat-raised-button (click)="openSnackbar()">TRIGGER SNACKBAR</button>`;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  openSnackbar() {
    this.snackBar.open('I\'m a notification!', 'CLOSE', {
      duration: 3000,
      horizontalPosition: 'right'
    });
  }
}
