import { Component, OnInit } from '@angular/core';
import { PaquetesService } from '../services/paquetes.service';
import { Router } from '@angular/router';
import { HelperService } from '../services/helper.service';



@Component({
  selector: 'app-registro-paquetes',
  templateUrl: './registro-paquetes.page.html',
  styleUrls: ['./registro-paquetes.page.scss'],
})
export class RegistroPaquetesPage implements OnInit {
  
  paquete: any = {};


  constructor(private router:Router,
              private helper:HelperService,
              private paquetesService:PaquetesService,
             
            

              ) { }

  ngOnInit() {
    this.vistaPaquetes();
  }
  
  async vistaPaquetes(){
    console.log("PAQUETES STORAGE",await this.paquetesService.obtenerPaquetes());
  }
  volver(){
    this.router.navigateByUrl("menu");
  }

  async guardarPaquete() {
    // Asegúrate de que todos los campos estén llenos
    if (!this.paquete.id || !this.paquete.nombre || !this.paquete.descripcion ||
        !this.paquete.destinatario || !this.paquete.estado || !this.paquete.repartidorId) {
          this.helper.showAlert("Por favor, completa todos los campos","Error");
      return;
    }

    // Guardar el paquete utilizando el servicio
    this.paquetesService.guardarPaquete(this.paquete);
    await this.router.navigateByUrl('menu');
    await this.helper.showAlert("Paquete registrado correctamente","Información");  

    // Limpia el formulario después de guardar
    this.paquete = {};
  }

  obtenerPaquetes(): any[] {
    // Obtener la lista de paquetes utilizando el servicio
    return this.paquetesService.obtenerPaquetes();
  }


}
