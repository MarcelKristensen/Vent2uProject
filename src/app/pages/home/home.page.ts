import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getRooms().subscribe((res) => {
      console.log(res);
    });
  }
}
