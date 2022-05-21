import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {
  login: any = { admin: '', password: '' };
  admins;

  formLogin = new FormGroup({
    admin: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    public alertController: AlertController,
    private adminService: AdminService
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
    let isUserCorrect;
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.admins.length; i++) {
      const user = this.admins[i].username.toString();
      const password = this.admins[i].password.toString();
      if (
        this.formLogin.value.admin === user &&
        this.formLogin.value.password === password
      ) {
        isUserCorrect = true;
      } else {
        isUserCorrect = false;
      }
    }

    if (isUserCorrect) {
      this.router.navigateByUrl('/admin');
    } else {
      this.showAlert();
    }
  }

  ngOnInit() {
    this.adminService.getAllAdmins().subscribe(
      (res: any) => {
        console.log('SUCCESS GET ALL ADMINS ====');
        this.admins = res;
      },
      (error: any) => {
        console.log('ERRROR ===', error);
      }
    );
  }
}
