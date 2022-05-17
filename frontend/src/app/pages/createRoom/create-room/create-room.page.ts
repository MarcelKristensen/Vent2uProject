import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPage implements OnInit {
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  formRoom = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    startZone: new FormControl('', [
      Validators.required,
      Validators.pattern(this.numberRegEx),
      Validators.maxLength(2),
    ]),
    endZone: new FormControl('', [
      Validators.required,
      Validators.pattern(this.numberRegEx),
      Validators.maxLength(2),
    ]),
  });

  constructor() {}

  onSubmit() {
    console.warn(this.formRoom.value);
  }

  ngOnInit() {}
}
