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

  constructor(
    public userinputService: UserinputService,
    private storage: Storage
  ) {}

  async postDataAPI() {
    const getAssignedZoneId = await this.storage.get('assignedZone');

    const postData = {
      zoneId: getAssignedZoneId,
      gender: this.genderInput,
      temperature: this.temperatureInput,
      energy: this.energyInput,
      humidity: this.humidityInput,
    };
    console.log(getAssignedZoneId, 'yo');

    this.userinputService.createUserinput(postData).subscribe(
      (data) => {
        console.log('SUCCESS ===', data);
      },
      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }

  isDataReady() {
    if (
      this.genderInput &&
      this.temperatureInput &&
      this.energyInput &&
      this.humidityInput
    ) {
      return false;
    }
    return true;
  }

  async ngOnInit() {
    await this.storage.create();

    const getId = await this.storage.get('id');
    console.log(getId);
  }
}
