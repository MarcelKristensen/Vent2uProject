import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRoomsPageRoutingModule } from './edit-rooms-routing.module';

import { EditRoomsPage } from './edit-rooms.page';
import { LogoModule } from 'src/app/components/logo/logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRoomsPageRoutingModule,
    LogoModule,
  ],
  declarations: [EditRoomsPage],
})
export class EditRoomsPageModule {}
