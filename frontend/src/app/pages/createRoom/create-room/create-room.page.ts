import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { ZoneService } from 'src/app/services/zone.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPage implements OnInit {
  isCreated = false;
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

  constructor(
    public roomService: RoomService,
    public zoneService: ZoneService,
    public alertController: AlertController
  ) {}

  onSubmit() {
    console.warn(this.formRoom.value);

    const roomData = {
      name: this.formRoom.value.name,
    };

    this.roomService.createRoom(roomData).subscribe(
      (data) => {
        console.log('SUCCESS ===', data);
        this.createZone(data);
        this.isCreated = true;
        this.presentOnCreateAlert();
      },
      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }

  createZone(room) {
    const listOfZones = [];

    for (
      let i = this.formRoom.value.startZone;
      i <= this.formRoom.value.endZone;
      i++
    ) {
      listOfZones.push(i);
    }

    listOfZones.map((zone) => {
      this.zoneService.createZone({ number: zone, roomId: room.id }).subscribe(
        (data) => {
          console.log('SUCCESS ===', data);
        },
        (error: any) => {
          console.log('ERROR ===', error);
        }
      );
    });
  }

  async presentOnCreateAlert() {
    const alert = this.isCreated
      ? await this.alertController.create({
          cssClass: 'my-custom-class',
          message: 'Room with new zones created successfully!',
          buttons: ['OK'],
        })
      : await this.alertController.create({
          cssClass: 'my-custom-class',
          message: 'Error 101: Room not created, please try again later.',
          buttons: ['OK'],
        });

    await alert.present();
  }

  ngOnInit() {}
}
