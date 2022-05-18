import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-room-modal',
  templateUrl: './edit-room-modal.component.html',
  styleUrls: ['./edit-room-modal.component.scss'],
})
export class EditRoomModalComponent implements OnInit {
  isOpen = false;
  entryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    startZone: new FormControl('', [Validators.required]),
    endZone: new FormControl('', [Validators.required]),
  });

  constructor() {}

  onSubmit() {
    console.warn(this.entryForm.value);
  }
  ngOnInit() {}
}
