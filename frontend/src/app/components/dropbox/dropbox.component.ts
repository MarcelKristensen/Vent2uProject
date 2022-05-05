import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.scss'],
})
export class DropboxComponent implements OnInit {
  displayMessage;
  answers = [];
  constructor() {}

  ngOnInit() {}

  dropped(event: CdkDragDrop<string[]>) {
    console.log(event);
    this.displayMessage = 'this is what it means';
    copyArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}

interface Photo {}
