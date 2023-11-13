import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { Usuario } from 'src/app/models/usuario';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  correo:string = "";
  contrasenna:string = "";
  nombre:string = "";
  rut:string ="";
 

  constructor(private router:Router,
              private auth:AngularFireAuth,
              private helper:HelperService,
              private storageService:StorageService,
              private formBuilder: FormBuilder,
             

            ) { }

  ngOnInit() {

    this.vistaUser();
    
  }

  volver(){
    this.router.navigateByUrl("login");
  }

  async vistaUser(){
    console.log("USUARIOS STORAGE",await this.storageService.obtenerUsuario());
  }

  async registro(){
    const loader = await this.helper.showLoader("Cargando");
    if (this.correo == '') {
      await loader.dismiss(); 
      await this.helper.showAlert("Debe ingresar un correo","Error");
      return;
    }
    if (!this.validar_Rut(this.rut)) {
      await loader.dismiss();
      await this.helper.showAlert("RUT no válido", "Error");
      return;
    }
    if (!this.validar_Nombre(this.nombre)) {
      await loader.dismiss();
      await this.helper.showAlert("Nombre no válido", "Error");
      return;
    }
      var user = 
      [
        {
          email:this.correo,
          nombre:this.nombre,
          rut:this.rut
        
        }
      ]
      try {
        const request = await this.auth.createUserWithEmailAndPassword(this.correo,this.contrasenna);
          this.storageService.guardarUsuario(user);
        await this.router.navigateByUrl('login');
        await loader.dismiss(); 
        await this.helper.showAlert("Usuario registrado correctamente","Información");  
        } catch (error:any) {
          if (error.code == 'auth/email-already-in-use') {
            await loader.dismiss();
            await this.helper.showAlert("El correo ya se encuentra registrado.","Error");
          }
          if (error.code == 'auth/invalid-email') {
            await loader.dismiss();
            await this.helper.showAlert("El correo no es el correcto.","Error");
          }
          if (error.code == 'auth/weak-password') {
            await loader.dismiss();
            await this.helper.showAlert("El largo de la contraseña es muy corto.","Error");
          }
        
        }     

  }


validar_Nombre(nombre: string): boolean {
   
    if (nombre.length < 3) {
      return false; 
    }
  
    return true;
  }

validar_Rut(rut: string): boolean {
    rut = rut.replace(/\./g, '').replace('-', '').toUpperCase();
    const cuerpo = rut.slice(0, -1);
    const digitoVerificador = rut.slice(-1);
  
    let suma = 0;
    let multiplicador = 2;
  
    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += Number(cuerpo[i]) * multiplicador;
      multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
  
    const digitoEsperado = 11 - (suma % 11);
    const digitoEsperadoStr = digitoEsperado === 10 ? 'K' : digitoEsperado.toString();
  
    return digitoEsperadoStr === digitoVerificador;
  }


  



}