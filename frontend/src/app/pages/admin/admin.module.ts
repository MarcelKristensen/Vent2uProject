import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { AdminSettingsComponent } from 'src/app/components/adminSettings/admin-settings/admin-settings.component';
import { LogoModule } from 'src/app/components/logo/logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    LogoModule,
  ],
  declarations: [AdminPage, AdminSettingsComponent],
})
export class AdminPageModule {}
