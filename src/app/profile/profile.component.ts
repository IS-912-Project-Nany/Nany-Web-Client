import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsuariosService } from '../services/usuarios.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { UploadService } from '../services/upload.service';
import { convertTypeAcquisitionFromJson } from 'typescript';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  faCheck = faCheck;
  usuario: any = '';
  file: File = null;
  formData = new FormData();
  inputFile: boolean = true;
  buttonFile: boolean = false;
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
  orders: any = [
    {
      destination: 'Col. La Travesia',
      buyer: 'Marcos Torres',
      total: 990.00,
      productName: 'Wendys',
      imgOrder: '../../assets/img/products/wendys-food.jpg',
      date:'12/20/2021',
      state: {
        name: "En Camino",
        color: '#FF1E1E'
      }
    },
    {
      destination: 'Col. La Travesia',
      buyer: 'Marcos Torres',
      date:'12/20/2021',
      total: 990.00,
      imgOrder: '../../assets/img/products/wendys-food.jpg',
      state: {
        name: "Entregado",
        color: '#00EF35'
      }
    },
  ];
  constructor(
    private usuariosService:UsuariosService,
    private cookieService:CookieService,
    private uploadService: UploadService) {}

  ngOnInit(): void {
    if (this.cookieService.check('nanyUsuarioId')) {
      this.usuariosService.obtenerUsuario(this.cookieService.get('nanyUsuarioId')).subscribe(
        result => {
          let fecha = result.fechaNacimiento.split('T');
          result.fechaNacimiento = fecha[0];
          this.usuario = result;
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  selectImage(event) {
    this.file = event.target.files[0];
    this.inputFile = false;
    this.buttonFile = true;
  }

  onUpload() {
    this.formData.append("imagen", this.file);
    this.formData.append("folder", 'usuarios');
    this.uploadService.subirImagen(this.formData).subscribe(
      result => {
        this.usuario.imagen = result.url;
        this.buttonFile = false;
        this.scrollToTop();
        this.obtenerData();
        this.actualizarUsuario();
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  obtenerData(){
    let ciudadSeleccionada: any = {};
    this.ciudades.forEach(ciudad => {
      if(this.usuario.ciudad.idCiudad == ciudad.idCiudad){
        ciudadSeleccionada.idCiudad = this.usuario.ciudad.idCiudad;
        ciudadSeleccionada.ciudad = ciudad.ciudad;
      }
    });

    let usuarioActualizado = {
      nombre: this.usuario.nombre,
      apellido: this.usuario.apellido,
      correo: this.usuario.correo,
      fechaNacimiento: this.usuario.fechaNacimiento,
      genero: this.usuario.genero,
      ciudad: ciudadSeleccionada,
      imagen: this.usuario.imagen
    }
    console.log(usuarioActualizado);
    return usuarioActualizado;
  }

  actualizarUsuario(){
    this.usuariosService.actualizarUsuario(this.usuario._id, this.obtenerData()).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
}
