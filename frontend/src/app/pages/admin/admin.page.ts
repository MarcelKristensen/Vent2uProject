import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { CrudService } from 'src/app/services/crud.service';
import { Room } from 'src/app/services/room';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  rooms: any = [];
  zones: any = [];
  uniqueRoom = [];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.getRooms().subscribe((res) => {
      this.rooms = res;
      this.getRoomNames();
    });
  }

  getRoomNames() {
    let roomName = [];

    for (let index = 0; index < this.rooms.length; index++) {
      const element = this.rooms[index];
      roomName.push(element.name);
    }
    this.uniqueRoom = roomName.filter(
      (element, index) => roomName.indexOf(element) === index
    );
  }
}
