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
    zone: 0,
  };
  zones: any[];
  isZones = false;
  userinputs: any[];
  userinputsFilter: any[];
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
        console.log('SUCCESS USER INPUTS ====', res);
        this.userinputs = res;
        this.userinputsFilter = res;
      },
      (error: any) => {
        console.log('ERRROR ===', error);
      }
    );
  }

  ngOnInit() {
    this.onSelect(this.selectedRoom.id);
    this.onSelectZone(this.selectedRoom.zone);
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

    console.log(roomIdSelec.value, 'select id', this.selectedRoom.zone);

    const filterInputsByRoom = this.userinputsFilter?.filter((input) => {
      if (roomIdSelec.value === '0') {
        return input;
      } else if (input.Zone.roomId === Number(roomIdSelec.value)) {
        return input;
      }
      this.selectedRoom.zone = 0;
    });
    this.userinputs = filterInputsByRoom;
  }

  onSelectZone(zoneNumberSelect) {
    const filterInputsByZone = this.userinputsFilter?.filter((input) => {
      if (zoneNumberSelect.value === '0') {
        return input;
      } else if (input.Zone.number === Number(zoneNumberSelect.value)) {
        return input;
      }
    });

    this.userinputs = filterInputsByZone;
  }
}
