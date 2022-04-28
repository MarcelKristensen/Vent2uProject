import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { UserIdService } from 'src/app/services/user-id.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage implements OnInit {
  constructor(public storage: Storage, public userId: UserIdService) {}

  ngOnInit() {
    //this.userId.getUserId();
  }
}
