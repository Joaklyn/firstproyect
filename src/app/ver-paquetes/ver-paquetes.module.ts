import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPaquetesPageRoutingModule } from './ver-paquetes-routing.module';

import { VerPaquetesPage } from './ver-paquetes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPaquetesPageRoutingModule
  ],
  declarations: [VerPaquetesPage]
})
export class VerPaquetesPageModule {}
