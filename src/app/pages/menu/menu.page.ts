import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IonCard, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { Animation } from '@ionic/angular';
import { AnimationController} from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';
import { JokeService } from 'src/app/services/joke.service';

import { RepartidorService } from 'src/app/services/repartidor.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  usuario:any;
  nombreUsuario:string = "";
  rutUsuario:string = "";
  chiste: string="";
  

 


  
  @ViewChild (IonCard, {read:ElementRef})
  card!: ElementRef<HTMLIonCardElement>;

  nombre: string | null;

  private animation!: Animation


  constructor(
              private router:Router,
              private helper:HelperService,
              private animationCtrl: AnimationController,
              private repartidorService: RepartidorService,
              private storage:StorageService,
              private auth:AngularFireAuth,
              public toastController: ToastController,
              private jokeService: JokeService

            ) { 
              this.nombre = this.repartidorService.getUserName();
              if (this.nombre === null) {
                this.nombre = 'NOMBRE NO DISPONIBLE';
              }
            }

  ngOnInit() {
    this.User();
    this.obtenerChisteProgramacion();


  }

  async Toast() {
    const toast = await this.toastController.create({
      message: 'PAQUETES DE CLIENTES',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  async Toast_2() {
    const toast = await this.toastController.create({
      message: 'INGRESE SU PAQUETE',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  async Toast_3() {
    const toast = await this.toastController.create({
      message: 'INFORMACION PERSONAL',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }


 async desLogin(){
  var corfirmar = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar")
    if (corfirmar == true) {
      await this.auth.signOut();
      await this.router.navigateByUrl("login");
    }
  }

  async openPerfil(){
    const loader = await this.helper.showLoader("Cargando");
    this.router.navigateByUrl("perfil");
    await loader.dismiss();
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }

 async Paquetes(){
    const loader = await this.helper.showLoader("Cargando");
    this.router.navigateByUrl("paquetes")
    await loader.dismiss();
  }

  abrirPaquete(){
    this.router.navigateByUrl("registro-paquetes");
  }

  async User(){
    console.log("USUARIO STORAGE",await this.storage.obtenerUsuario());
    console.log("PROPIEDAD SERVICE STORAGE",this.storage.usuarioCorreo);

    var user = await this.auth.currentUser;

    this.usuario = (await this.storage.obtenerUsuario()).filter(e => e.email == user?.email);
    this.nombreUsuario =  this.usuario[0].nombre;
    this.rutUsuario =  this.usuario[0].rut;
  }

  obtenerChisteProgramacion() {
    this.jokeService.obtenerChisteProgramacion().subscribe(
      (data: any) => {
        if (data.type === 'twopart') {
          this.chiste = `${data.setup} ${data.delivery}`;
        } else if (data.type === 'single') {
          this.chiste = data.joke;
        } else {
          this.chiste = 'No se pudo obtener un chiste válido.';
        }
      },
      error => {
        console.error('Error al obtener el chiste:', error);
      }
    );
  }


  

  

}