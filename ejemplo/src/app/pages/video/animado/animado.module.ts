import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimadoPageRoutingModule } from './animado-routing.module';

import { AnimadoPage } from './animado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimadoPageRoutingModule
  ],
  declarations: [AnimadoPage]
})
export class AnimadoPageModule {}
