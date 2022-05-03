import { UserinputService } from './../../services/userinput.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {

  userinput = {
    gender: '',
    temperature: '',
    energy: '',
    humidity: ''
  };
  submitted = false;

  constructor(
    private userinputService: UserinputService
    ) {
  }
  saveUserinput() {
    const data = {
      gender: this.userinput.gender,
      temperature: this.userinput.temperature,
      energy: this.userinput.energy,
      humidity: this.userinput.humidity
    };
    this.userinputService.createUserinput(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {}
}
