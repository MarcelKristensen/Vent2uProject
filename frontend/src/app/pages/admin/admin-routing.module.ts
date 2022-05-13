import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), OverlayModule],
  exports: [RouterModule, OverlayModule],
})
export class AdminPageRoutingModule {}
