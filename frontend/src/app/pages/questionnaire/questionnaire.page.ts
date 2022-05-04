import { UserinputService } from './../../services/userinput.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

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
  private _storage: Storage | null = null;

  constructor(
    private userinputService: UserinputService,
    private storage: Storage
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

  async ngOnInit() {
    const storage = await this.storage.create();
    this._storage = storage;

    const getId = await this.storage.get('id');
    console.log(getId);
  }
}
