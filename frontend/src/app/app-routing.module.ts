import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'questionnaire',
    loadChildren: () =>
      import('./pages/questionnaire/questionnaire.module').then(
        (m) => m.QuestionnairePageModule
      ),
  },
  {
    path: 'thank-you',
    loadChildren: () =>
      import('./pages/thank-you/thank-you.module').then(
        (m) => m.ThankYouPageModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () => 
    import('./pages/admin/admin.module').then(
       m => m.AdminPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
