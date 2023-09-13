import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Repartidor {
  id: number;
  nombre: string;
  edad: number;
  sexo: string;
  nacionalidad: string;
}

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.page.html',
  styleUrls: ['./detalle-repartidor.page.scss'],
})
export class DetalleRepartidorPage implements OnInit {
  repartidor: Repartidor = {
    id: 0,
    nombre: '',
    edad: 0,
    sexo: '',
    nacionalidad: '',
  };

  // Agrega una lista de repartidores (debes llenarla con tus datos)
  repartidores: Repartidor[] = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      edad: 30,
      sexo: 'Masculino',
      nacionalidad: 'Mexicana',
    },
    {
      id: 2,
      nombre: 'María González',
      edad: 28,
      sexo: 'Femenino',
      nacionalidad: 'Española',
    },
    // Agrega más repartidores aquí...
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const repartidorIdParam = this.route.snapshot.paramMap.get('id');
    
    // Verifica si repartidorIdParam no es nulo antes de convertirlo a número
    if (repartidorIdParam !== null) {
      const repartidorId = +repartidorIdParam;

      // Busca el repartidor correspondiente por su ID en la lista de repartidores
      const encontrado = this.repartidores.find(repartidor => repartidor.id === repartidorId);

      if (encontrado) {
        this.repartidor = encontrado;
      } else {
        // Manejar el caso en el que no se encuentre el repartidor.
        // Puedes agregar aquí tu lógica personalizada, por ejemplo, mostrar un mensaje de error.
      }
    } else {
      // Manejar el caso en el que 'repartidorId' sea nulo, por ejemplo, redirigir o mostrar un mensaje de error.
      // Puedes agregar aquí tu lógica personalizada.
    }
  }
}
