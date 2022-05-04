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

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.getRooms().subscribe((res) => {
      this.rooms = res;
    });

    this.crudService.getAllUsedZones().subscribe((res) => {
      this.zones = Object.values(res).map((zone) => zone.zone);
    });
  }
}
