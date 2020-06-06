import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationApplyPageRoutingModule } from './application-apply-routing.module';

import { ApplicationApplyPage } from './application-apply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ApplicationApplyPageRoutingModule
  ],
  declarations: [ApplicationApplyPage]
})
export class ApplicationApplyPageModule {}
