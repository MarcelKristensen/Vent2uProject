import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from 'express';
import { UserinputService } from 'src/app/services/userinput.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {

  password:"1234"

  constructor(private router:Router,private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  async loginadmin(form):Promise<void>{
    this.loginadmin(form.value.password).
    then(
    )

  }
  
}
