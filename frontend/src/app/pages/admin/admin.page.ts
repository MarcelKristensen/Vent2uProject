import { RoomService } from 'src/app/services/room.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  rooms: any[];
  userinputs: any[];
  openform=false;

  constructor(
    public roomService: RoomService,
    ){
      this.getAllRooms();
    }

  getAllRooms(){
    this.roomService.getAllRooms().subscribe((res: any) => {
      console.log('SUCCESS ====',res);
      this.rooms = res;
    }, (error: any) => {
      console.log('ERRROR ===', error);
    });
  }

  ngOnInit() {
  }

}
