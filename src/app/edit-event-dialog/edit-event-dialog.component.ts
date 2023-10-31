import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-event-dialog',
  templateUrl: './edit-event-dialog.component.html',
  styleUrls: ['./edit-event-dialog.component.css']
})
export class EditEventDialogComponent {
   editedEvent: any;
   constructor(public dialogRef: MatDialogRef<EditEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){
      this.editedEvent= {...data.event};
    }

    saveEditedEvent(){
      this.dialogRef.close(this.editedEvent);
    }
    closeDialog(){
      this.dialogRef.close();
    }
}
