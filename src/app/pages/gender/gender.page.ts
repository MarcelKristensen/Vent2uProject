import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  @Output() genderChoice = new EventEmitter<string>();
  addGender(value: string){
    this.genderChoice.emit(value);
  console.log(value)

  }


  constructor() { }

  ngOnInit() {
  }

}
