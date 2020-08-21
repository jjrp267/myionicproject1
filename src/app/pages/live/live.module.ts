import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivePageRoutingModule } from './live-routing.module';

import { LivePage } from './live.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LivePageRoutingModule
  ],
  declarations: [LivePage]
})
export class LivePageModule {}
