import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealconanimalesPage } from './realconanimales.page';

const routes: Routes = [
  {
    path: '',
    component: RealconanimalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealconanimalesPageRoutingModule {}
