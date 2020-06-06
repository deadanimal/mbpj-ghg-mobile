import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationHousePage } from './application-house.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationHousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationHousePageRoutingModule {}
