import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { UserIdService } from 'src/app/services/user-id.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {
  constructor(public storage: Storage, public userId: UserIdService) {}

  ngOnInit() {
    this.userId.init();
  }
}
