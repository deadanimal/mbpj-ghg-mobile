import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationApplyPage } from './application-apply.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationApplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationApplyPageRoutingModule {}
