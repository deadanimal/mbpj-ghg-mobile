import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationWalkthroughPageRoutingModule } from './application-walkthrough-routing.module';

import { ApplicationWalkthroughPage } from './application-walkthrough.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationWalkthroughPageRoutingModule
  ],
  declarations: [ApplicationWalkthroughPage]
})
export class ApplicationWalkthroughPageModule {}
