import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign',
    loadChildren: () => import('./sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'next',
    loadChildren: () => import('./next/next.module').then( m => m.NextPageModule)
  },
  {
    path: 'calcu',
    loadChildren: () => import('./calcu/calcu.module').then( m => m.CalcuPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./tips/tips.module').then( m => m.TipsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
