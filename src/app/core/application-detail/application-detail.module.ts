import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationDetailPageRoutingModule } from './application-detail-routing.module';

import { ApplicationDetailPage } from './application-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationDetailPageRoutingModule
  ],
  declarations: [ApplicationDetailPage]
})
export class ApplicationDetailPageModule {}
