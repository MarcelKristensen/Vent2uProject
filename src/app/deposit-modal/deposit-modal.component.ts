import { ModalController } from '@ionic/angular';
import { UserinputService } from './../services/userinput.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent implements OnInit {
  userinputs: any[];

  constructor(public _userinputService: UserinputService,
              private modalCtrl: ModalController        
    ) { 
    this.getUserinputs();
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

  dismissModal(){
    this.modalCtrl.dismiss();
  }
      
  ngOnInit() {}
}
