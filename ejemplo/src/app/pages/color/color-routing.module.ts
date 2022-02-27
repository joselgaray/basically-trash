import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorPage } from './color.page';

const routes: Routes = [
  {
    path: '',
    component: ColorPage
  },
  {
    path: 'lineagruesa',
    loadChildren: () => import('./lineagruesa/lineagruesa.module').then( m => m.LineagruesaPageModule)
  },
  {
    path: 'lineadelgada',
    loadChildren: () => import('./lineadelgada/lineadelgada.module').then( m => m.LineadelgadaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorPageRoutingModule {}
