import { DepositModalComponent } from './../../deposit-modal/deposit-modal.component';
import { UserinputService } from './../../services/userinput.service';
import { CrudService } from './../../services/crud.service';
import { ControllerService } from './../../api/controllers/user_input.controller.js';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';

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
    public _userinputService: UserinputService,
    public _roomService: CrudService,
    private modalCtrl: ModalController
    ){
      this.getUserinputs();
      this.getRooms();

    }


getRooms(){
  this._roomService.getRooms().subscribe((res:any) => {
    console.log("SUCCESS ====",res);
    this.rooms = res;
  }, (error: any) => {
    console.log("ERRROR ===", error);
  })
}

getUserinputs(){
  this._userinputService.getAllUserInputs()
  .subscribe(
    data => {
      this.userinputs = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
  )
}

async getModal(){
const modal = await this.modalCtrl.create({
  component: DepositModalComponent
});
await modal.present();
}

  ngOnInit() {
  }

}
