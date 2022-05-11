import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionnairePageRoutingModule } from './questionnaire-routing.module';

import { QuestionnairePage } from './questionnaire.page';
import { DropboxComponent } from 'src/app/components/dropbox/dropbox.component';
import { LogoModule } from 'src/app/components/logo/logo/logo.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionnairePageRoutingModule,
    LogoModule,
  ],
  declarations: [QuestionnairePage, DropboxComponent],
})
export class QuestionnairePageModule {}
