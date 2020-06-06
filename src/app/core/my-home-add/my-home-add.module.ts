import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyHomeAddPageRoutingModule } from './my-home-add-routing.module';

import { MyHomeAddPage } from './my-home-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyHomeAddPageRoutingModule
  ],
  declarations: [MyHomeAddPage]
})
export class MyHomeAddPageModule {}
