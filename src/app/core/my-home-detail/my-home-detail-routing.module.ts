import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHomeDetailPage } from './my-home-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MyHomeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyHomeDetailPageRoutingModule {}
