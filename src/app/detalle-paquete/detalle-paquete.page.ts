import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Paquete {
  id: number;
  nombre: string;
  descripcion: string;
  repartidor: string;
  estado: string;
}

@Component({
  selector: 'app-detalle-paquete',
  templateUrl: './detalle-paquete.page.html',
  styleUrls: ['./detalle-paquete.page.scss'],
})
export class DetallePaquetePage {
  paquetes: Paquete[] = [
    {
      id: 1,
      nombre: 'Paquete A',
      descripcion: 'Este es el paquete A',
      repartidor: 'Juan Pérez',
      estado: 'Por repartir'
    },
    {
      id: 2,
      nombre: 'Paquete B',
      descripcion: 'Este es el paquete B',
      repartidor: 'María González',
      estado: 'Por repartir'
    },
  ];

  paquete: Paquete | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      if (!isNaN(id)) {
        this.paquete = this.paquetes.find((paq) => paq.id === id);
      }
  }
}
}
