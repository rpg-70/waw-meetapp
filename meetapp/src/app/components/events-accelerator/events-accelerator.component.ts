import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EventCreatorDialogComponent } from '../events-accelerator/event-creator-dialog/event-creator-dialog.component';

@Component({
  selector: 'app-events-accelerator',
  templateUrl: './events-accelerator.component.html',
  styleUrls: ['./events-accelerator.component.scss']
})
export class EventsAcceleratorComponent implements OnInit {

  fileNameDialogRef: MatDialogRef<EventCreatorDialogComponent>;
  name:string;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(EventCreatorDialogComponent);   
  }

  

}