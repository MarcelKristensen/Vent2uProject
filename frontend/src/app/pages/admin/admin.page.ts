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
  getSpecificZone = [];
  selectedRoom: '';
  selectedZone: number;

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
    if (!this.selectedRoom) {
      console.log('no room selected');
      //Do nothing
    } else {
      console.log('room has been selected!');
      //Get zones related to the selected room
    }

    let roomZone = [];
    for (let index = 0; index < this.zones.length; index++) {
      const element = this.zones[index];
      roomZone.push(element.zone);
      //console.log(element.zone);
    }
    this.getZones = roomZone.filter(
      (element, index) => roomZone.indexOf(element) === index
    );
  }
}
