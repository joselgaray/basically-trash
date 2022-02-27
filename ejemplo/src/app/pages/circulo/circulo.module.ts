import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CirculoPageRoutingModule } from './circulo-routing.module';

import { CirculoPage } from './circulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CirculoPageRoutingModule
  ],
  declarations: [CirculoPage]
})
export class CirculoPageModule {}
