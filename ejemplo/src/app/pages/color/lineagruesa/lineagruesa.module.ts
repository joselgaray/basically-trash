import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineagruesaPageRoutingModule } from './lineagruesa-routing.module';

import { LineagruesaPage } from './lineagruesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineagruesaPageRoutingModule
  ],
  declarations: [LineagruesaPage]
})
export class LineagruesaPageModule {}
