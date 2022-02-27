import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'linea',
    loadChildren: () => import('./pages/linea/linea.module').then( m => m.LineaPageModule)
  },
  {
    path: 'color',
    loadChildren: () => import('./pages/color/color.module').then( m => m.ColorPageModule)
  },
  {
    path: 'rectangulo',
    loadChildren: () => import('./pages/rectangulo/rectangulo.module').then( m => m.RectanguloPageModule)
  },
  {
    path: 'circulo',
    loadChildren: () => import('./pages/circulo/circulo.module').then( m => m.CirculoPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
