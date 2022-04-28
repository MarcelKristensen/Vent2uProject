import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {

  login:any={username:'',password:''}
  formGrp:FormGroup
  username_error:String


  constructor(private router: Router, private route:ActivatedRoute, formBuilder:FormBuilder){ 
    this.formGrp=formBuilder.group({
      username_error:['',Validators.required]
    })
  }

  loginadmin(){
    if (this.login.username =='admin' && this.login.password =='password')
    {this.router.navigateByUrl('/admin')}
  }


  ngOnInit() {
  }
}

