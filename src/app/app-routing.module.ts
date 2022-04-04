import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CustomPreloadingService } from './services/custom-preloading/custom-preloading.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'contact',
    data: { preload: true }, // <- set to false if you dont want to be preloaded.
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'legal',
    loadChildren: () =>
      import('./pages/legal-notice/legal-notice.module').then(
        (m) => m.LegalNoticeModule
      ),
  },
  {
    path: 'restApi',
    data: { preload: true },
    loadChildren: () =>
      import('./pages/pokemons/pokemons.module').then((m) => m.PokemonsModule),
  },

  // path:'**' must be declared last
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
