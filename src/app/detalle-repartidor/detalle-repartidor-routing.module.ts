import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleRepartidorPage } from './detalle-repartidor.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleRepartidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleRepartidorPageRoutingModule {}
