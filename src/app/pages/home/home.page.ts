import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

var Random = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
};

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
    const UserId = '#' + Math.random().toString(36).slice(2, 9);

  }



  getUniqueLocation() {
    const freeZone = this.roomZones.find((roomZone) => roomZone !== this.zones);
    console.log(freeZone);
    if (freeZone >= 1 && freeZone <= 8) {
      this.assignedLocation = `Room D3.05, Zone ${freeZone}`;
    } else {
      this.assignedLocation = `Room D3.06, Zone ${freeZone}`;
    }
  }
}
