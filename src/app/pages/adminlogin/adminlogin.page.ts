import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AdminPage } from '../admin/admin.page';

//https://edupala.com/ionic-two-way-data-binding/
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {

  login:any={username:'',password:''}


  constructor(private router: Router, private route:ActivatedRoute) { }


  loginadmin(){
    console.log('username:',this.login.username);
    console.log('admin password',this.login.password);
    if (this.login.username =='admin' && this.login.password =='12345')
    {this.router.navigateByUrl('/admin')}
  }


  ngOnInit() {
  }
}
