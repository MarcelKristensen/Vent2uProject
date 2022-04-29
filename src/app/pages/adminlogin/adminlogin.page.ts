import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Adminloginpageform } from './adminlogin.page.form';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {

  login:any={admin:'',password:''}

  form:FormGroup

  constructor(private router: Router,private formBuilder:FormBuilder){}

  loginadmin(){
    if (this.login.admin =='admin' && this.login.password =='password')
    {this.router.navigateByUrl('/admin')}
  else{
    
  }
  }
  
  ngOnInit() {
    this.form=new Adminloginpageform (this.formBuilder).createForm(); 
  }
}

