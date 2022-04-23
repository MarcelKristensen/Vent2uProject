import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  choices=[]
  constructor() {}

  userInputs(userChoices: string){
    this.choices.push(userChoices);
    console.log(this.choices)
  }
}

