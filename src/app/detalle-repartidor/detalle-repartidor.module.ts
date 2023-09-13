import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleRepartidorPageRoutingModule } from './detalle-repartidor-routing.module';

import { DetalleRepartidorPage } from './detalle-repartidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleRepartidorPageRoutingModule
  ],
  declarations: [DetalleRepartidorPage]
})
export class DetalleRepartidorPageModule {}
