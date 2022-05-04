import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionaireCrudTestPageRoutingModule } from './questionaire-crud-test-routing.module';

import { QuestionaireCrudTestPage } from './questionaire-crud-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionaireCrudTestPageRoutingModule
  ],
  declarations: [QuestionaireCrudTestPage]
})
export class QuestionaireCrudTestPageModule {}
