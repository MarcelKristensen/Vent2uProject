import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  rooms: any = [];
  zones: any = [];
  getRooms = [];
  getZones = [];

  //used in the html for the selected values
  //Like selecting D3.05 and zone 3 to work with the user values in the ts file.
  selectedRoom: string = '';
  selectedZone: string = '';

  constructor(private crudService: CrudService) {}
  ngOnInit() {
    this.crudService.getRooms().subscribe((res) => {
      this.rooms = res;
      this.getRoomNames();
    });

    this.crudService.getRooms().subscribe((res) => {
      this.zones = res;
      this.getRoomZones();
    });
  }

  getRoomNames() {
    let roomName = [];
    for (let index = 0; index < this.rooms.length; index++) {
      const element = this.rooms[index];
      roomName.push(element.name);
    }
    this.getRooms = roomName.filter(
      (element, index) => roomName.indexOf(element) === index
    );
  }

  getRoomZones() {
    let roomZone = [];
    for (let index = 0; index < this.zones.length; index++) {
      const element = this.zones[index];
      roomZone.push(element.zone);
      console.log(element.zone);
    }
    this.getZones = roomZone.filter(
      (element, index) => roomZone.indexOf(element) === index
    );
  }
}
