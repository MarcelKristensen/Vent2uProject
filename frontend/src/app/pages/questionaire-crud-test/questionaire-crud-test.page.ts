import { UserinputService } from './../../services/userinput.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-questionaire-crud-test',
  templateUrl: './questionaire-crud-test.page.html',
  styleUrls: ['./questionaire-crud-test.page.scss'],
})
export class QuestionaireCrudTestPage implements OnInit {
  userinputs: any[];

  id: any;
  genderInput: any;
  temperatureInput: any;
  energyInput: any;
  humidityInput: any;
  private _storage: Storage | null = null;

  constructor(
    public userinputService: UserinputService,
    private storage: Storage){}

  postDataAPI(){
    let id = this.storage.get('id').then( res => console.log(res));
    let temperature = this.temperatureInput;
    let energy = this.energyInput;
    let humidity = this.humidityInput;
    let gender = this.genderInput;


    temperature = parseInt(temperature);
    humidity = parseInt(humidity);
    energy = parseInt(energy);


    let postData = {
      id,
      gender,
      temperature,
      energy,
      humidity
    };

    console.log(postData)

    this.userinputService.createUserinput(postData)
      .subscribe(data => {
        console.log('SUCCESS ===', data);
      }, (error: any) => {
        console.log('ERROR ===', error);
      });
  };


  async ngOnInit() {
    const storage = await this.storage.create();
    this._storage = storage;

    const getId = await this.storage.get('id');
    console.log(getId);
  }
}
