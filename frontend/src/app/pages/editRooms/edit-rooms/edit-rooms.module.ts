import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRoomsPageRoutingModule } from './edit-rooms-routing.module';

import { EditRoomsPage } from './edit-rooms.page';
import { LogoModule } from 'src/app/components/logo/logo/logo.module';
import { EditRoomModalComponent } from 'src/app/components/editRoomModal/edit-room-modal/edit-room-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRoomsPageRoutingModule,
    LogoModule,
    ReactiveFormsModule,
  ],
  declarations: [EditRoomsPage, EditRoomModalComponent],
})
export class EditRoomsPageModule {}
