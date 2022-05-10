import { Component } from '@angular/core';
import { CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.scss'],
})
export class DropboxComponent {
  displayMessage =
    'Are you ready to learn what each question is all about? Drag one of the questions into this box and find out!';
  questions = [];
  isOpen = false;
  constructor() {}

  dropped(event: CdkDragDrop<string[]>) {
    if (event.container.data.length > 0) {
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
      this.displayMessage =
        'The most known factor about climate as a whole is <b>temperature</b>, \
        and that is where this question comes in. Temperature affects every single person differently, \
        and can affect your health unknowingly, but could we achieve the perfect indoor climate?!';
    } else if (
      event.previousContainer.data[0] === 'How is your energy level?'
    ) {
      this.displayMessage =
        'Another indoor climate factor is <b>air quality</b>. \
        This is something that we might not often consider, \
        but poor air quality within rooms can affect your mood, your energy levels, and cause other serious health issues down the line.';
    } else if (event.previousContainer.data[0] === 'How does your skin feel?') {
      this.displayMessage =
        'This question might sound a bit peculiar, \
        but it is actually being used to give us an insight about <b>humidity</b>. \
        As a factor in indoor climate, humidity is known as the amount of water vapour in a given space, \
        and is able to affect your health in tremendous ways.';
    } else if (
      event.previousContainer.data[0] === 'What gender do you identify with?'
    ) {
      this.displayMessage =
        'Well done... Unfortunately, not much else can be said about this question. Try another one!';
    }
  }
}
