import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimadoPage } from './animado.page';

const routes: Routes = [
  {
    path: '',
    component: AnimadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimadoPageRoutingModule {}
