import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRoomsPage } from './edit-rooms.page';

const routes: Routes = [
  {
    path: '',
    component: EditRoomsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), OverlayModule],
  exports: [RouterModule, OverlayModule],
})
export class EditRoomsPageRoutingModule {}
