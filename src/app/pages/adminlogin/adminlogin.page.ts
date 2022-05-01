import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Adminloginpageform } from './adminlogin.page.form';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {
  login:any={admin:'',password:''}
  form:FormGroup

  constructor(private router: Router,private formBuilder:FormBuilder, public alertController:AlertController){}

  showAlert(){
    this.alertController.create({
      header:'You have 1 more attempt or we are calling 112',
      subHeader:'Incorrect username or password',
      message:'Please input the correct username and password',
      buttons:['OK']
    }).then(res=>{
      res.present();
    })
  }


  loginadmin(){

    if (this.login.admin =='admin' && this.login.password =='password')
    {this.router.navigateByUrl('/admin')}
  else{this.showAlert()
  }
  }
  
  
  ngOnInit() {
    this.form=new Adminloginpageform (this.formBuilder).createForm(); 
  }
}