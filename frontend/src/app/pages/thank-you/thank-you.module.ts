import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThankYouPageRoutingModule } from './thank-you-routing.module';

import { ThankYouPage } from './thank-you.page';
import { LogoModule } from 'src/app/components/logo/logo/logo.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThankYouPageRoutingModule,
    LogoModule,
  ],
  declarations: [ThankYouPage],
})
export class ThankYouPageModule {}
