import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaquetesService } from '../paquetes.service';

interface Paquete {
  id: number;
  nombre: string;
  descripcion: string;
  destinatario: string;
  estado: string;
}

@Component({
  selector: 'app-paquetes-repartidor',
  templateUrl: './paquetes-repartidor.page.html',
  styleUrls: ['./paquetes-repartidor.page.scss'],
})
export class PaquetesRepartidorPage implements OnInit {
  repartidorId: number = 0;
  paquetes: Paquete[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paquetesService: PaquetesService
  ) {}

  ngOnInit() {
    // Obtén el ID del repartidor desde la URL
    const repartidorIdParam = this.route.snapshot.paramMap.get('repartidorId');
    
    if (repartidorIdParam !== null) {
      this.repartidorId = +repartidorIdParam;
    } else {
      // Manejar el caso en el que 'repartidorId' sea nulo, por ejemplo, redirigir o mostrar un mensaje de error.
      this.router.navigate(['/error']); // Reemplaza '/error' con la ruta correcta para el manejo de errores.
      return; // Detén la ejecución del código si 'repartidorId' es nulo.
    }

    // Llama al servicio para obtener los paquetes asociados al repartidor
    this.paquetesService.obtenerPaquetesPorRepartidor(this.repartidorId).then((paquetes) => {
      this.paquetes = paquetes;
    });
  }

  volverAHome() {
    this.router.navigate(['/home']);
  }

  verDetallePaquete(id: number) {
  }
}
