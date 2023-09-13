import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Paquete {
  id: number;
  nombre: string;
  descripcion: string;
  destinatario: string;
  estado: string;
}

@Component({
  selector: 'app-ver-paquetes',
  templateUrl: './ver-paquetes.page.html',
  styleUrls: ['./ver-paquetes.page.scss'],
})
export class VerPaquetesPage {
  constructor(private router: Router) {}

  volverAHome() {
    this.router.navigate(['/home']);
  }

  irAAgregarPaquete() {
    this.router.navigate(['/agregar-paquete']);
  }

  paquetes: Paquete[] = [
    {
      id: 1,
      nombre: 'Paquete A',
      descripcion: 'Este es el paquete A',
      destinatario: 'Juan Pérez',
      estado: 'Por repartir'
    },
    {
      id: 2,
      nombre: 'Paquete B',
      descripcion: 'Este es el paquete B',
      destinatario: 'María González',
      estado: 'Por repartir'
    },
  ];

  verDetallePaquete(id: number) {
    // Busca el paquete correspondiente por su ID y navega a la página de detalle
    const paquete = this.paquetes.find((paq) => paq.id === id);
    if (paquete) {
      this.router.navigate(['/detalle-paquete', paquete.id]);
    }
  }
}
