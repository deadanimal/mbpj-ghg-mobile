import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationHousePageRoutingModule } from './application-house-routing.module';

import { ApplicationHousePage } from './application-house.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationHousePageRoutingModule
  ],
  declarations: [ApplicationHousePage]
})
export class ApplicationHousePageModule {}
