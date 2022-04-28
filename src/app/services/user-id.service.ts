import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class UserIdService {
  private _storage: Storage | null = null;

  constructor(public storage: Storage) {}

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;

    const userId = Math.random().toString(36).slice(2, 9);

    const getCurrentTime = new Date();

    /*if (!this.storage.hasOwnProperty('expire')) {
        const expire = new Date();
        expire.setHours(getCurrentTime.getHours() + 12);
        this.storage.set('expire', expire);
        console.log('first if');
      } else {
        console.log('blbala');
      }*/

    //console.log(!this.storage.hasOwnProperty('expire'));

    const getId = await this.storage.get('id');
    console.log(getId);

    if (!getId) {
      console.log('ioioio');
      this.storage.set('id', userId);
    } else {
      console.log('ID already assigned');
    }
  }

  /*
    getUserId() {
      this.storage.get('id').then((val) => {
        console.log(val);
      });
  
      this.storage.get('startHour').then((d) => {
        console.log('StartTime ' + d);
      });
  
      this.storage.get('expireHour').then((f) => {
        console.log('Expire ' + f);
      });
    }
    */
}
