import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./pages/legal-notice/legal-notice.module').then(m => m.LegalNoticeModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
  },



  // path:'**' must be declared last
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
