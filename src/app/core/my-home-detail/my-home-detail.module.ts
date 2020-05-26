import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyHomeDetailPageRoutingModule } from './my-home-detail-routing.module';

import { MyHomeDetailPage } from './my-home-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyHomeDetailPageRoutingModule
  ],
  declarations: [MyHomeDetailPage]
})
export class MyHomeDetailPageModule {}
