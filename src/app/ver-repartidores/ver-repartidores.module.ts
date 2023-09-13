import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerRepartidoresPageRoutingModule } from './ver-repartidores-routing.module';

import { VerRepartidoresPage } from './ver-repartidores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerRepartidoresPageRoutingModule
  ],
  declarations: [VerRepartidoresPage]
})
export class VerRepartidoresPageModule {}
