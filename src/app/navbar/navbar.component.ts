import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle, faSignOutAlt, faClipboardList, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  faUserCircle = faUserCircle;
  faSignOutAlt = faSignOutAlt;
  faClipboardList = faClipboardList;
  faShoppingCart = faShoppingCart;
  
  islogged: boolean = false;
  usuario: any = '';
  cantidadProductosCarrito: number = 0;
  constructor(private cookiesService: CookieService, private _route: Router) { }

  ngOnInit(): void {
    if (this.cookiesService.check('nanyUsuarioId')) {
      console.log("Usuario Logeado");
      this.islogged = true;
      this.usuario = {
        _id: this.cookiesService.get('nanyUsuarioId'),
        nombre: this.cookiesService.get('nanyUsuarioNombre'),
        apellido: this.cookiesService.get('nanyUsuarioApellido'),
      }
      let localStorage = window.localStorage;
      let carritoInfo = JSON.parse(localStorage.getItem('productosCarrito' + this.usuario.nombre))

      if (carritoInfo != undefined) {
        if (carritoInfo.length != 0)  
          this.cantidadProductosCarrito = carritoInfo.length;
      }
    }
  }

  logOut() {
    this.cookiesService.delete('nanyUsuarioId');
    this.cookiesService.delete('nanyUsuarioNombre');
    this.cookiesService.delete('nanyUsuarioApellido');
    this.islogged = false;
    this.usuario = '';
    console.log('Cerrar Sesion');
    this._route.navigate(['/']);
  }

}
