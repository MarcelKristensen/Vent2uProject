import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionaireCrudTestPage } from './questionaire-crud-test.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionaireCrudTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionaireCrudTestPageRoutingModule {}
