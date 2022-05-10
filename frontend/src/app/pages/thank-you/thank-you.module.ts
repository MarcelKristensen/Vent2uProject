import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThankYouPageRoutingModule } from './thank-you-routing.module';

import { ThankYouPage } from './thank-you.page';
import { LogoComponent } from 'src/app/components/logo/logo/logo.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ThankYouPageRoutingModule],
  declarations: [ThankYouPage, LogoComponent],
})
export class ThankYouPageModule {}
