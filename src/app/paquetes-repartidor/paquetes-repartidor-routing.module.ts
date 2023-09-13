import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaquetesRepartidorPage } from './paquetes-repartidor.page';

const routes: Routes = [
  {
    path: '',
    component: PaquetesRepartidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaquetesRepartidorPageRoutingModule {}
