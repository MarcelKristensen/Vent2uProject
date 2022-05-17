import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPage implements OnInit {
  formRoom = new FormGroup({
    name: new FormControl(),
    startZone: new FormControl(),
    endZone: new FormControl(),
  });

  constructor() {}

  onSubmit() {
    console.warn(this.formRoom.value);
  }

  ngOnInit() {}
}
