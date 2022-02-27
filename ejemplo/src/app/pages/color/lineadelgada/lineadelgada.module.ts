import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineadelgadaPageRoutingModule } from './lineadelgada-routing.module';

import { LineadelgadaPage } from './lineadelgada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineadelgadaPageRoutingModule
  ],
  declarations: [LineadelgadaPage]
})
export class LineadelgadaPageModule {}
