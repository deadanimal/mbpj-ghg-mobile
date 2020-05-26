import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyHomeAddPageRoutingModule } from './my-home-add-routing.module';

import { MyHomeAddPage } from './my-home-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyHomeAddPageRoutingModule
  ],
  declarations: [MyHomeAddPage]
})
export class MyHomeAddPageModule {}
