import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { UserinputService } from 'src/app/services/userinput.service';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  rooms: any[];
  zones: any[];
  userinputs: any[];
  openform = false;
  constructor(
    public roomService: RoomService,
    public zoneService: ZoneService,
    public userService: UserinputService
  ) {
    this.getAllRooms();
    this.getAllZones();
    this.getAllUserInputs();
  }

  getAllRooms() {
    this.roomService.getAllRooms().subscribe(
      (res: any) => {
        console.log('SUCCESS ====', res);
        this.rooms = res;
      },
      (error: any) => {
        console.log('ERRROR ===', error);
      }
    );
  }

  getAllZones() {
    this.zoneService.getAllZones().subscribe(
      (res: any) => {
        console.log('SUCCESS ====', res);
        this.zones = res;
      },
      (error: any) => {
        console.log('ERRROR ===', error);
      }
    );
  }

  getAllUserInputs() {
    this.userService.getAllUserInputs().subscribe(
      (res: any) => {
        console.log('SUCCESS ====', res);
        this.userinputs = res;
      },
      (error: any) => {
        console.log('ERRROR ===', error);
      }
    );
  }

  ngOnInit() {}
}
