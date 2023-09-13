import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaquetesRepartidorPageRoutingModule } from './paquetes-repartidor-routing.module';

import { PaquetesRepartidorPage } from './paquetes-repartidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaquetesRepartidorPageRoutingModule
  ],
  declarations: [PaquetesRepartidorPage]
})
export class PaquetesRepartidorPageModule {}
