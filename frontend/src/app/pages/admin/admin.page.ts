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
  selectedRoom = {
    id: 0,
    zone: '',
  };
  zones: any[];
  isZones = false;
  userinputs: any[];
  openform = false;
  constructor(
    public roomService: RoomService,
    public zoneService: ZoneService,
    public userService: UserinputService
  ) {
    this.getAllRooms();
    this.getAllUserInputs();
  }

  getAllRooms() {
    this.roomService.getAllRooms().subscribe(
      (res: any) => {
        this.rooms = res;
        console.log('SUCCESS ====', res);
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

  ngOnInit() {
    this.onSelect(this.selectedRoom.id);
  }

  onSelect(roomIdSelec) {
    this.roomService.getAllRooms().subscribe((res: any) => {
      const filterZones = res.map((room) =>
        room.Zones.filter(
          (zone) => Number(roomIdSelec.value) === Number(zone.roomId)
        )
      );

      const removeEmptyArrs = filterZones.filter(
        (zoneArr) => zoneArr.length > 0
      );
      this.zones = removeEmptyArrs?.[0]?.sort((a, b) => a.number - b.number);

      if (this.zones?.length > 1) {
        this.isZones = true;
      }

      if (Number(this.selectedRoom.id) === 0) {
        this.isZones = false;
      }
    });
  }
}
