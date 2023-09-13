import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Repartidor {
  id: number;
  nombre: string;
  edad: number;
  sexo: string;
  nacionalidad: string;
}

@Component({
  selector: 'app-ver-repartidores',
  templateUrl: './ver-repartidores.page.html',
  styleUrls: ['./ver-repartidores.page.scss'],
})
export class VerRepartidoresPage {

  constructor(private router: Router) { }

  volverAHome() {
    this.router.navigate(['/home']);
  }
  verPaquetesDelRepartidor(repartidorId: number) {
    this.router.navigate(['/paquetes-repartidor', repartidorId]);
  }
  verDetalleRepartidor(repartidorId: number) {
    this.router.navigate(['/detalle-repartidor', repartidorId]);
  }

  repartidores: Repartidor[] = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      edad: 35,
      sexo: 'Masculino',
      nacionalidad: 'Español'
    },
    {
      id: 2,
      nombre: 'María González',
      edad: 28,
      sexo: 'Femenino',
      nacionalidad: 'Mexicana'
    },
  ];
  
}
