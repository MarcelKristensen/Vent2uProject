import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-edit-room-modal',
  templateUrl: './edit-room-modal.component.html',
  styleUrls: ['./edit-room-modal.component.scss'],
})
export class EditRoomModalComponent implements OnInit {
  zone;
  modal;
  entryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    zone: new FormControl('', [Validators.required]),
  });

  constructor(private zoneService: ZoneService) {}

  onSubmit() {
    const zoneObject = {
      id: this.zone.id,
      number: this.entryForm.value.zone,
    };

    this.zoneService.updateZone(this.zone.id, zoneObject).subscribe(
      (data) => {
        console.log('SUCCESS ===', data);
        this.modal.dismiss({ isZoneUpdated: true });
      },
      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }
  ngOnInit() {
    this.entryForm = new FormGroup({
      name: new FormControl(this.zone.Room.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      zone: new FormControl(this.zone.number, [Validators.required]),
    });
  }
}
