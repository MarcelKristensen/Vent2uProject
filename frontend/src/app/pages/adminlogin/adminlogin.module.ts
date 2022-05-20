import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminloginPageRoutingModule } from './adminlogin-routing.module';

import { AdminloginPage } from './adminlogin.page';
import { LogoModule } from 'src/app/components/logo/logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminloginPageRoutingModule,
    ReactiveFormsModule,
    LogoModule,
  ],
  declarations: [AdminloginPage],
})
export class AdminloginPageModule {}
