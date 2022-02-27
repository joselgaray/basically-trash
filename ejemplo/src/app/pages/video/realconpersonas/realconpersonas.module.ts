import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealconpersonasPageRoutingModule } from './realconpersonas-routing.module';

import { RealconpersonasPage } from './realconpersonas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealconpersonasPageRoutingModule
  ],
  declarations: [RealconpersonasPage]
})
export class RealconpersonasPageModule {}
