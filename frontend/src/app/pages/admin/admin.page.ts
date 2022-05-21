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
  userinputs: any[];
  userinputsFilter: any[];
  isInputsFiltered = false;
  userInputsScroll: any[];
  moreInputs = 20;
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
        this.userInputsScroll = res.slice(0, this.moreInputs);
        this.userinputsFilter = res.slice(0, this.moreInputs);
        this.userinputs = res;
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

  formatDate(date) {
    const strDate = date.substring(0, 10).split('-').reverse().join('-');
    return strDate;
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
    });

    const filterInputsByRoom = this.userinputs?.filter((input) => {
      if (roomIdSelec.value === '0') {
        this.selectedRoom.zone = 0;
        this.isInputsFiltered = false;
        return input;
      } else if (input.Zone.roomId === Number(roomIdSelec.value)) {
        this.isInputsFiltered = true;
        return input;
      }
      this.selectedRoom.zone = 0;
    });
    this.userInputsScroll = filterInputsByRoom;
    this.userinputsFilter = filterInputsByRoom;
  }

  onSelectZone(zoneNumberSelect) {
    const filterInputsByZone = this.userinputs?.filter((input) => {
      if (zoneNumberSelect.value === '0') {
        return input;
      } else if (input.Zone.number === Number(zoneNumberSelect.value)) {
        return input;
      }
    });

    this.userInputsScroll = filterInputsByZone;
    this.userinputsFilter = filterInputsByZone;
  }

  loadData(event) {
    setTimeout(() => {
      this.moreInputs += 10;
      if (this.isInputsFiltered) {
        this.userInputsScroll = this.userinputsFilter.slice(0, this.moreInputs);
      } else {
        this.userInputsScroll = this.userinputs.slice(0, this.moreInputs);
      }
      event.target.complete();

      if (
        this.userinputs.length === this.userInputsScroll.length ||
        this.userInputsScroll.length === this.userinputsFilter.length
      ) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
