import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionnairePageRoutingModule } from './questionnaire-routing.module';

import { QuestionnairePage } from './questionnaire.page';
import { DropboxComponent } from 'src/app/components/dropbox/dropbox.component';
import { LogoComponent } from 'src/app/components/logo/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionnairePageRoutingModule,
  ],
  declarations: [QuestionnairePage, DropboxComponent, LogoComponent],
})
export class QuestionnairePageModule {}
