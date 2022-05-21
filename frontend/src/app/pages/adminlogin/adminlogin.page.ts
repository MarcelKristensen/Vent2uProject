import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {
  login: any = { admin: '', password: '' };

  formLogin = new FormGroup({
    admin: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    public alertController: AlertController
  ) {}

  showAlert() {
    this.alertController
      .create({
        header: 'ERROR #198',
        subHeader: 'Your username or password is incorrect',
        message: 'Please input the correct username and password',
        buttons: ['OK'],
      })
      .then((res) => {
        res.present();
      });
  }

  loginadmin() {
    if (this.login.admin === 'admin' && this.login.password === 'password') {
      this.router.navigateByUrl('/admin');
    } else {
      this.showAlert();
    }
  }

  ngOnInit() {}
}
