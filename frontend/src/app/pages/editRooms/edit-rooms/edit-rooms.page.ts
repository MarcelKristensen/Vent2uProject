import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-edit-rooms',
  templateUrl: './edit-rooms.page.html',
  styleUrls: ['./edit-rooms.page.scss'],
})
export class EditRoomsPage implements OnInit {
  zones;

  constructor(private zoneService: ZoneService) {}

  ngOnInit() {
    this.zoneService.getAllZones().subscribe((res) => {
      this.zones = res;
      console.log(this.zones);
    });
  }
}
