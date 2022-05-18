import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/services/zone.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-edit-rooms',
  templateUrl: './edit-rooms.page.html',
  styleUrls: ['./edit-rooms.page.scss'],
})
export class EditRoomsPage implements OnInit {
  zones;

  constructor(
    private zoneService: ZoneService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.zoneService.getAllZones().subscribe((res) => {
      this.zones = res;
      console.log(this.zones);
    });
  }

  async alertDeleteZoneEntry(zone) {
    console.log(zone.id);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: `Are you sure you want to delete entry with zone ${zone.number}?`,
      buttons: [
        {
          text: 'Return',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            console.log('Cancel delete');
          },
        },
        {
          text: 'Confirm',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteZoneEntry(zone.id);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteZoneEntry(zoneId) {
    this.zoneService.deleteZone(zoneId).subscribe(
      (res) => {
        console.log('SUCCESS ===', res);
        this.ngOnInit();
      },
      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }
}
