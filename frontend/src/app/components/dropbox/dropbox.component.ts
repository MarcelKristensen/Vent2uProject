import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';

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
    if (event.container.data.length > 0) {
      console.log('hi');
      const newDataArr = event.container.data.splice(
        0,
        event.container.data.length
      );
      copyArrayItem(
        event.previousContainer.data,
        newDataArr,
        event.previousIndex,
        event.currentIndex
      );
    }
    copyArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

    console.log(event.previousContainer.data);
    if (event.previousContainer.data[0] === 'What describes you best?') {
      this.displayMessage = 'temp';
    } else if (
      event.previousContainer.data[0] === 'How is your energy level?'
    ) {
      this.displayMessage = 'air quality';
    } else if (event.previousContainer.data[0] === 'How does your skin feel?') {
      this.displayMessage = 'humidity';
    }
  }
}

interface Photo {}
