import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VerPaquetesPage } from './ver-paquetes/ver-paquetes.page';
import { DetallePaquetePage } from './detalle-paquete/detalle-paquete.page';

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
    path: 'ver-paquetes',
    loadChildren: () => import('./ver-paquetes/ver-paquetes.module').then( m => m.VerPaquetesPageModule)
  },
  {
    path: 'ver-repartidores',
    loadChildren: () => import('./ver-repartidores/ver-repartidores.module').then( m => m.VerRepartidoresPageModule)
  },
  {
    path: 'paquetes-repartidor/:repartidorId',
    loadChildren: () => import('./paquetes-repartidor/paquetes-repartidor.module').then( m => m.PaquetesRepartidorPageModule)
  },
  {
  path: 'detalle-paquete',
  loadChildren: () => import('./detalle-paquete/detalle-paquete.module').then( m => m.DetallePaquetePageModule)
  },
  {
    path: 'ver-paquetes',
    component: VerPaquetesPage,
  },
  {
    path: 'detalle-paquete/:id',
    component: DetallePaquetePage,
  },
  {
    path: '',
    redirectTo: 'ver-paquetes',
    pathMatch: 'full',
  },
  {
    path: 'detalle-repartidor/:id',
    loadChildren: () => import('./detalle-repartidor/detalle-repartidor.module').then( m => m.DetalleRepartidorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
