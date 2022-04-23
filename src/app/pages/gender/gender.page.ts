import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {


  constructor() { }

  clickEvent(){
    const msg='Button is Clicked';
    console.log(msg);
  }
  ngOnInit() {
    const Something="Hello there"
    console.log(Something)
  }

}
