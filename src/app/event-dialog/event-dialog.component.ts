import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css'],
})
export class EventDialogComponent {

  event: any = {
    title: '',
    start: '',
    location: '',
  };

  constructor(
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.event={...data.event };
  }

  saveEvent() {

    this.dialogRef.close(this.event);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
