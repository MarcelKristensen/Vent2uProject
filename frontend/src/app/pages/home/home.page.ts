import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  rooms: any = [];
  zones: any = [];
  roomZones: any = [];
  assignedLocation = '';
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.getRooms().subscribe((res) => {
      this.rooms = res;
      this.roomZones = Object.values(res).map((zone) => zone.zone);
    });

    this.crudService.getAllUsedZones().subscribe((res) => {
      this.zones = Object.values(res).map((zone) => zone.zone);
      this.getUniqueLocation();
    });
  }

  getUniqueLocation() {
    const freeZone = this.roomZones.find(
      (roomZone) => !this.zones.includes(roomZone)
    );
    console.log(freeZone);
    if (freeZone >= 1 && freeZone <= 8) {
      this.assignedLocation = `Room D3.05, Zone ${freeZone}`;
    } else {
      this.assignedLocation = `Room D3.06, Zone ${freeZone}`;
    }
  }
}