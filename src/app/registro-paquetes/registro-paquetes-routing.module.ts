import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPaquetesPage } from './registro-paquetes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPaquetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPaquetesPageRoutingModule {}
