import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoPage } from './video.page';

const routes: Routes = [
  {
    path: '',
    component: VideoPage
  },
  {
    path: 'realconpersonas',
    loadChildren: () => import('./realconpersonas/realconpersonas.module').then( m => m.RealconpersonasPageModule)
  },
  {
    path: 'animado',
    loadChildren: () => import('./animado/animado.module').then( m => m.AnimadoPageModule)
  },
  {
    path: 'realconanimales',
    loadChildren: () => import('./realconanimales/realconanimales.module').then( m => m.RealconanimalesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoPageRoutingModule {}
