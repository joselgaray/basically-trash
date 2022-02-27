import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealconpersonasPage } from './realconpersonas.page';

const routes: Routes = [
  {
    path: '',
    component: RealconpersonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealconpersonasPageRoutingModule {}
