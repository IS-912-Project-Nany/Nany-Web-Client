import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {
  formRegistro = new FormGroup({
    nombre: new FormControl ('', [Validators.required, Validators.maxLength(30)]),
    apellido: new FormControl ('', [Validators.required, Validators.maxLength(30)]),
    correo: new FormControl('', [Validators.required,Validators.pattern(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]){8,}$/)]),
    ciudad: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required])
  });
  confirmPassword = new FormControl('',[Validators.required]);
  responseRegistro: any = '';
  isLoading: boolean = false;
  ciudades = [
    { idCiudad: 1, ciudad: 'Choluteca'},
    { idCiudad: 2, ciudad: 'Comayagua'},
    { idCiudad: 3, ciudad: 'Gracias'},
    { idCiudad: 4, ciudad: 'Juticalpa'},
    { idCiudad: 5, ciudad: 'La Ceiba'},
    { idCiudad: 6, ciudad: 'La Paz'},
    { idCiudad: 7, ciudad: 'La Esperanza'},
    { idCiudad: 8, ciudad: 'Nacaome'},
    { idCiudad: 9, ciudad: 'Nuevo Ocotepeque'},
    { idCiudad: 10, ciudad: 'Puerto Lempira'},
    { idCiudad: 11, ciudad: 'Roatán'},
    { idCiudad: 12, ciudad: 'San Pedro Sula'},
    { idCiudad: 13, ciudad: 'Santa Bárbara'},
    { idCiudad: 14, ciudad: 'Santa  Rosa de Copán'},
    { idCiudad: 15, ciudad: 'Tegucigalpa'},
    { idCiudad: 16, ciudad: 'Trujillo'},
    { idCiudad: 17, ciudad: 'Yoro'},
    { idCiudad: 18, ciudad: 'Yuscarán'}
  ]

  constructor(
    private usuariosService: UsuariosService,
    private cookiesService:CookieService,
    private _route: Router
    ) { }

  ngOnInit() {
  }

  registrar() {
    this.isLoading = true;
    let ciudadSeleccionada: any = {};
    this.ciudades.forEach(ciudad => {
      if(this.formRegistro.value.ciudad == ciudad.idCiudad){
        ciudadSeleccionada.idCiudad = this.formRegistro.value.ciudad;
        ciudadSeleccionada.ciudad = ciudad.ciudad;
      }
    });

    let nuevoUsuario = {
      nombre: this.formRegistro.value.nombre,
      apellido: this.formRegistro.value.apellido,
      correo: this.formRegistro.value.correo,
      password: this.formRegistro.value.password,
      fechaNacimiento: this.formRegistro.value.fechaNacimiento,
      genero: this.formRegistro.value.genero,
      tipoUsuario: { idUsuario: 1, tipo: "cliente"},
      imagen: "../../assets/iconos/user-icon.png",
      ciudad: ciudadSeleccionada,
      ordenes: []
    }
    console.log("Se registrara al usuario:", nuevoUsuario);

    this.usuariosService.registrar(nuevoUsuario).subscribe(
      result => {
        if (result.code == 0) {
          this.responseRegistro = result;
          this.correo.setValue('');
        } else {
          const dateNow = new Date();
          dateNow.setMinutes(dateNow.getMinutes() + 60);
          this.cookiesService.set('nanyUsuarioId', result.usuario._id, dateNow);
          this.cookiesService.set(
            'nanyUsuarioNombre',
            result.usuario.nombre,
            dateNow
          );
          this.cookiesService.set(
            'nanyUsuarioApellido',
            result.usuario.apellido,
            dateNow
          );

          this._route.navigate(['/categorias']);
        }
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
    this.isLoading = true;
  }

  get nombre(){
    return this.formRegistro.get('nombre');
  }

  get apellido(){
    return this.formRegistro.get('apellido');
  }

  get correo() {
    return this.formRegistro.get('correo');
  }

  get password() {
    return this.formRegistro.get('password');
  }

  get ciudad(){
    return this.formRegistro.get('ciudad');
  }

  get fechaNacimiento(){
    return this.formRegistro.get('fechaNacimiento');
  }

  get genero(){
    return this.formRegistro.get('genero');
  }
}
