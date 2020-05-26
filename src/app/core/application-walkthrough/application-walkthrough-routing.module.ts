import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationWalkthroughPage } from './application-walkthrough.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationWalkthroughPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationWalkthroughPageRoutingModule {}
