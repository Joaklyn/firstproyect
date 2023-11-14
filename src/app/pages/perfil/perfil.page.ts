import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonCard} from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario:any;
  correoUsuario:string = "";
  rutUsuario:string = "";
  @ViewChild (IonCard, {read:ElementRef})
  card!: ElementRef<HTMLIonCardElement>;

  

    private animation!: Animation;


  constructor(
              private router:Router,
              private animationCtrl:AnimationController,
           
              private storage:StorageService,
              private auth:AngularFireAuth 

            ) { }

  ngOnDestroy(): void {
    console.log("Destruyendo la vista");
  }

  ngOnInit() {
    this.cargarUsuario1();
  }

  volver1(){
    this.router.navigateByUrl("menu");
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-card"))
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }
  hola(){
    this.animation.play();
  }
  adios(){
    this.animation.stop();
  }

  
  
  async cargarUsuario1(){
    console.log("USUARIO STORAGE",await this.storage.obtenerUsuario());
    console.log("PROPIEDAD SERVICE STORAGE",this.storage.usuarioCorreo);

    var user = await this.auth.currentUser;

    this.usuario = (await this.storage.obtenerUsuario()).filter(e => e.email == user?.email);
    this.correoUsuario =  this.usuario[0].correo;
    this.rutUsuario =  this.usuario[0].rut;
    
  }
}
