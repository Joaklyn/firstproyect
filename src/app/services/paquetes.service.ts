import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class PaquetesService {
  private storageKey = 'paquetes'; 


  constructor() {}



  guardarPaquete(paquete: any): void {
    // Obtener los paquetes existentes del localStorage
    const paquetesGuardados = this.obtenerPaquetes();

    // Agregar el nuevo paquete
    paquetesGuardados.push(paquete);

    // Guardar la lista actualizada en el localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(paquetesGuardados));
  }

  obtenerPaquetes(): any[] {
    // Obtener los paquetes del localStorage
    const paquetesGuardados = localStorage.getItem(this.storageKey);

    // Si no hay paquetes almacenados, devolver un array vacío
    return paquetesGuardados ? JSON.parse(paquetesGuardados) : [];
  }

 


}
