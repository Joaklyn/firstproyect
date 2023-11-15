import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redireccionLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
 
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redireccionLogin},
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redireccionLogin},
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redireccionLogin},
    path: 'registro-paquetes',
    loadChildren: () => import('./registro-paquetes/registro-paquetes.module').then( m => m.RegistroPaquetesPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redireccionLogin},
    path: 'paquetes',
    loadChildren: () => import('./pages/paquetes/paquetes.module').then( m => m.PaquetesPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
