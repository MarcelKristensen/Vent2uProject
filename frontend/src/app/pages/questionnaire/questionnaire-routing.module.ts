import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnairePage } from './questionnaire.page';
import { DragDropModule } from '@angular/cdk/drag-drop';

const routes: Routes = [
  {
    path: '',
    component: QuestionnairePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DragDropModule],
  exports: [RouterModule, DragDropModule],
})
export class QuestionnairePageRoutingModule {}
