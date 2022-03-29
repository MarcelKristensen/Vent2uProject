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
    path: 'gender',
    loadChildren: () => import('./gender/gender.module').then( m => m.GenderPageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./thank-you/thank-you.module').then( m => m.ThankYouPageModule)
  },
  {
    path: 'energy',
    loadChildren: () => import('./energy/energy.module').then( m => m.EnergyPageModule),
  },  {
    path: 'humidity',
    loadChildren: () => import('./humidity/humidity.module').then( m => m.HumidityPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
