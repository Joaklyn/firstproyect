import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPaquetesPageRoutingModule } from './registro-paquetes-routing.module';

import { RegistroPaquetesPage } from './registro-paquetes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPaquetesPageRoutingModule
  ],
  declarations: [RegistroPaquetesPage]
})
export class RegistroPaquetesPageModule {}
