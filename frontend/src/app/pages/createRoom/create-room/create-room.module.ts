import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRoomPageRoutingModule } from './create-room-routing.module';

import { CreateRoomPage } from './create-room.page';
import { LogoModule } from 'src/app/components/logo/logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateRoomPageRoutingModule,
    LogoModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateRoomPage],
})
export class CreateRoomPageModule {}
