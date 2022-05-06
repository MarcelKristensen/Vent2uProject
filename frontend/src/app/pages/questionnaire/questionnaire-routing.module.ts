import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnairePage } from './questionnaire.page';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';

const routes: Routes = [
  {
    path: '',
    component: QuestionnairePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DragDropModule, OverlayModule],
  exports: [RouterModule, DragDropModule, OverlayModule],
})
export class QuestionnairePageRoutingModule {}
