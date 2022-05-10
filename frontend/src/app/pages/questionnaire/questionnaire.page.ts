import { UserinputService } from '../../services/userinput.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {
  userinputs: any[];
  id: any;
  genderInput: any;
  temperatureInput: any;
  energyInput: any;
  humidityInput: any;
  gender = ['What gender do you identify with?'];
  temperature = ['What describes you best?'];
  airQuality = ['How is your energy level?'];
  humidity = ['How does your skin feel?'];
  private _storage: Storage | null = null;

  constructor(
    public userinputService: UserinputService,
    private storage: Storage
  ) {}

  async postDataAPI() {
    const postData = {
      //id: await this.storage.get('id'), Used to post the stored ID
      zoneId: 1,
      gender: this.genderInput,
      temperature: this.temperatureInput,
      energy: this.energyInput,
      humidity: this.humidityInput,
    };

    this.userinputService.createUserinput(postData).subscribe(
      (data) => {
        console.log('SUCCESS ===', data);
      },
      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }

  async ngOnInit() {
    const storage = await this.storage.create();
    this._storage = storage;

    const getId = await this.storage.get('id');
    console.log(getId);
  }
}
