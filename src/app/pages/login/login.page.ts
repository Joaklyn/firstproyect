import { Component, OnInit } from '@angular/core';
import { ResetPasswordPage } from '../reset-password/reset-password.page';
import { NavController } from '@ionic/angular';
import { RepartidorService } from 'src/app/services/repartidor.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Routes } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  contrasenna:string = "";
  mensage: string = "";
  isLoading: boolean = false;


  constructor(private router:Router, 
              private helperService:HelperService,
              private modalCtrl:ModalController, 
              private route:ActivatedRoute,
              private navCtrl:NavController,
              private repartidorService: RepartidorService,
              private storage:StorageService,
              private auth:AngularFireAuth,
              public toastController: ToastController,
              private formBuilder: FormBuilder

            ) { }

  ngOnInit() {
  
  }
  



 

 async login() {
  if (!this.email || !this.contrasenna) {
    this.helperService.showAlert("Por favor, complete todos los campos.", "Advertencia");
    return;
  }

  try {
    const req = await this.auth.signInWithEmailAndPassword(this.email, this.contrasenna);
    this.storage.usuarioCorreo = this.email;
    console.log("TOKEN", await req.user?.getIdToken());
    await this.router.navigateByUrl("menu");
  } catch (error) {
    
    console.error("Error de autenticación:", error);
  }
}

 registro(){
  this.router.navigateByUrl("registro");
}

async obrirModal() {
  const modal = await this.modalCtrl.create({
    component: ResetPasswordPage,
  });
  modal.present();

  const { data, role } = await modal.onWillDismiss();

}

async Toast_1() {
  const toast = await this.toastController.create({
    message: "BIENVENIDO REPARTIDOR :)",
    duration: 4000,
    position: 'bottom',
    color: 'success', 
   
  });

  toast.present();
}

async Toast_4() {
  const toast = await this.toastController.create({
    message: 'INGRESE UN CORREO VALIDO, INGRESADO ANTERIORMENTE',
    duration: 4000,
    position: 'bottom',
  });

  toast.present();
}

}