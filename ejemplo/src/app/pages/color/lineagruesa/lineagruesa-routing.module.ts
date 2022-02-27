import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineagruesaPage } from './lineagruesa.page';

const routes: Routes = [
  {
    path: '',
    component: LineagruesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineagruesaPageRoutingModule {}
