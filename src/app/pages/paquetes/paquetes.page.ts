import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaquetesService } from 'src/app/services/paquetes.service';


@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.page.html',
  styleUrls: ['./paquetes.page.scss'],
})
export class PaquetesPage implements OnInit {
  paquetes: any[] = [];

  constructor(private paqueteService: PaquetesService,
              private router:Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.actualizarPaquetes();
  }

  actualizarPaquetes() {
    this.paquetes = this.paqueteService.obtenerPaquetes();
  }

  volver(){
    this.router.navigateByUrl("menu")
  }

}
