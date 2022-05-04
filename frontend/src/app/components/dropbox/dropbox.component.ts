import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.scss'],
})
export class DropboxComponent implements OnInit {
  displayMessage;
  constructor() {}

  ngOnInit() {}

  dropped(event: CdkDragDrop<string[]>) {
    console.log(event.currentIndex);
    this.displayMessage = 'this is what it means';
  }
}

interface Photo {}
