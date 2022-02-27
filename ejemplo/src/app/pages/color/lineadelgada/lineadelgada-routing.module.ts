import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineadelgadaPage } from './lineadelgada.page';

const routes: Routes = [
  {
    path: '',
    component: LineadelgadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineadelgadaPageRoutingModule {}
