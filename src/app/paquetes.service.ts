import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class PaquetesService {
  private paquetes: Paquete[] = [];

  constructor(private storage: Storage) {}

  async initStorage() {
    // Inicializa el almacenamiento si aún no está inicializado
    if (!(await this.storage.get('paquetes'))) {
      await this.storage.create();
    }
  }

  async guardarPaquete(paquete: Paquete) {
    // Obtiene la lista actual de paquetes
    const paquetes = await this.storage.get('paquetes') || [];
    
    // Agrega el nuevo paquete a la lista
    paquetes.push(paquete);

    // Guarda la lista actualizada en el almacenamiento
    await this.storage.set('paquetes', paquetes);
  }

  async obtenerPaquetes(): Promise<Paquete[]> {
    // Obtiene la lista de paquetes desde el almacenamiento
    const paquetes = await this.storage.get('paquetes') || [];

    // Actualiza la lista interna y la retorna
    this.paquetes = paquetes;
    return paquetes;
  }

  async obtenerPaquetesPorRepartidor(repartidorId: number): Promise<Paquete[]> {
    // Obtiene la lista de paquetes desde el almacenamiento
    const paquetes = await this.obtenerPaquetes();

    // Filtra los paquetes asociados al repartidor
    const paquetesDelRepartidor = paquetes.filter(paquete => paquete.repartidorId === repartidorId);

    return paquetesDelRepartidor;
  }
}

interface Paquete {
  id: number;
  nombre: string;
  descripcion: string;
  destinatario: string;
  estado: string;
  repartidorId: number;
}
