import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPaquetesPage } from './ver-paquetes.page';

const routes: Routes = [
  {
    path: '',
    component: VerPaquetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerPaquetesPageRoutingModule {}
