import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpdeskPageRoutingModule } from './helpdesk-routing.module';

import { HelpdeskPage } from './helpdesk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpdeskPageRoutingModule
  ],
  declarations: [HelpdeskPage]
})
export class HelpdeskPageModule {}
