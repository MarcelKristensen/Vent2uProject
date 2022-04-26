import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

import { Storage } from '@ionic/storage-angular';

const store = new Storage();
store.create();

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
  constructor(private crudService: CrudService, private storage: Storage) {
    //For storage
    this.initStorage()
    this.setUserId()
    this.getUserId()
  }

  initStorage(){
    const storage = this.storage.create();
  }

  randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  setUserId(){
    //userId will be set with a random math
    const randomMath = Math.floor(Math.random() * 999999999999999)
    if (this.storage.get('id') == null){
      this.storage.set('id', randomMath)
    }else{
      return false;
    }
    console.log(this.storage.get('id'))    
  }

  getUserId(){
    this.storage.get('id').then((val) => {
      //Check if I get the value from the math
      console.log(val)
    })
  }

  ngOnInit() {
    this.crudService.getRooms().subscribe((res) => {
      this.rooms = res;
      this.roomZones = Object.values(res).map((zone) => zone.zone);
    });

    this.crudService.getAllUsedZones().subscribe((res) => {
      this.zones = Object.values(res).map((zone) => zone.zone);
      this.getUniqueLocation();
    });
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
