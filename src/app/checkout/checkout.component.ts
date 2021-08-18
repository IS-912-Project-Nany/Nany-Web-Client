import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { OrdenesService } from '../services/ordenes.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  usuario: any = '';
  productosCarrito: any = [];
  localStorage = window.localStorage;
  totalTemp: number = null;
  region: string = 'carrito';
  isLoading: boolean = false;
  ordenCompleta: any = '';
  latitud: any = '';
  longitud : any = '';

  formCheckoutInfo = new FormGroup({
    destinatario: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    direccion: new FormControl('', [Validators.required, Validators.maxLength(500)]),
  });

  patronTarjeta = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/i;
  patronCcv = /[0-9]{3}/g;
  formCheckoutCredito = new FormGroup({
    numeroTarjeta: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern(this.patronTarjeta)]),
    titular: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    ccv: new FormControl( null, [Validators.required, Validators.maxLength(3), Validators.pattern(this.patronCcv)]),
    fechaExpiracion: new FormControl('', [Validators.required])
  });

  constructor(
    private cookiesService: CookieService,
    private ordenesService: OrdenesService,
    private _location: Location,
    private _route: Router
    ) { }

  ngOnInit(): void {
    if (this.cookiesService.check('nanyUsuarioId')){
      this.usuario = {
        _id: this.cookiesService.get('nanyUsuarioId'),
        nombre: this.cookiesService.get('nanyUsuarioNombre'),
        apellido: this.cookiesService.get('nanyUsuarioApellido'),
      }
      this.totalTemp = 0;
      let productosLocalStorage = JSON.parse(this.localStorage.getItem('productosCarrito' + this.usuario.nombre));
      if (productosLocalStorage != undefined) {
        if (productosLocalStorage.length != 0) {
          this.productosCarrito = productosLocalStorage;
          this.productosCarrito.forEach(item => {
            this.totalTemp += ((item.producto.precio + item.producto.isv) * item.cantidad)  
          });
        }
      } else {
        this.productosCarrito = [];
      }
    }
  }

  eliminarProductoLS(index) {
    console.log('Se eliminara producto con id ', index);
    Swal.fire({
      text: "¿Deseas remover este producto de tu carrito de compras?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#A6032F',
      cancelButtonColor: '#808080',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosCarrito.splice(index, 1);
        this.localStorage.setItem('productosCarrito' + this.usuario.nombre, JSON.stringify(this.productosCarrito));
        this.ngOnInit();
      }
    })
  }

  latlong(latlong){
    console.log(latlong);
    this.latitud = latlong.lat;
    this.longitud = latlong.lng;
  }

  confirmarOrden() {
    this.isLoading = true;
    let orden = {
      numOrden: JSON.stringify(Math.floor(Math.random() * (1000000 - 1) + 1)),
      cliente: this.usuario,
      motorista: '',
      ubicacionOrden: {
        destinatario: this.formCheckoutInfo.value.destinatario,
        direccion: this.formCheckoutInfo.value.direccion,
        latitud: this.latitud,
        longitud: this.longitud 
      },
      tipoEstado:{
        idEstado: "0",
        nombreEstado: "Disponible"
      },
      detalleProductos: this.productosCarrito,
      fecha: new Date(),
      metodoPago: {
        numeroTarjeta: this.formCheckoutCredito.value.numeroTarjeta,
        titular: this.formCheckoutCredito.value.titular,
        ccv: this.formCheckoutCredito.value.ccv,
        fechaExpiracion: this.formCheckoutCredito.value.fechaExpiracion
      }
    }
    console.log(orden);

    this.ordenesService.nuevaOrden(orden).subscribe(
      result => {
        this.ordenCompleta = orden;
        console.log(result);
        this.isLoading = false;
        this.region = 'completa'
        this.scrollToTop(515);
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ordenTerminada() {
    this.productosCarrito = [];
    this.ordenCompleta = '';
    this.localStorage.setItem('productosCarrito' + this.usuario.nombre, JSON.stringify(this.productosCarrito));
    Swal.fire({
      icon: 'success',
      title: 'Orden Exitosa',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#A6032F'
    })
    this._route.navigate(['/historial']);
  }

  moverCheckout() {
    this.scrollToTop(150);
    this.region = 'checkout';
  }

  regresar() {
    this._location.back();
  }

  get destinatario(){
    return this.formCheckoutInfo.get('destinatario');
  }

  
  get direccion(){
    return this.formCheckoutInfo.get('direccion');
  }

  get numeroTarjeta(){
    return this.formCheckoutCredito.get('numeroTarjeta');
  }
  
  get titular(){
    return this.formCheckoutCredito.get('titular');
  }

  get ccv(){
    return this.formCheckoutCredito.get('ccv');
  }
  
  get fechaExpiracion(){
    return this.formCheckoutCredito.get('fechaExpiracion');
  }
  scrollToTop(y) {
    window.scrollTo(0, y);
  }
}
