import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerRepartidoresPage } from './ver-repartidores.page';

const routes: Routes = [
  {
    path: '',
    component: VerRepartidoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerRepartidoresPageRoutingModule {}
