import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gender',
    loadChildren: () => import('./pages/gender/gender.module').then( m => m.GenderPageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./pages/thank-you/thank-you.module').then( m => m.ThankYouPageModule)
  },
  {
    path: 'energy',
    loadChildren: () => import('./pages/energy/energy.module').then( m => m.EnergyPageModule),
  },
  {
    path: 'humidity',
    loadChildren: () => import('./pages/humidity/humidity.module').then( m => m.HumidityPageModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./pages/temperature/temperature.module').then( m => m.TemperaturePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
