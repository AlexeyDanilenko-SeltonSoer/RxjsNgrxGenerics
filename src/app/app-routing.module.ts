import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './router/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'main-rxjs',
    loadChildren: () => import('./pages/main-rxjs/main-rxjs.module').then(mod => mod.MainRxjsModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./simple-pages/simple-pages.module').then(mod => mod.SimplePagesModule)
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
