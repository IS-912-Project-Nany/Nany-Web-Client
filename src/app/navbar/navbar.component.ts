import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle, faSignOutAlt, faClipboardList} from '@fortawesome/free-solid-svg-icons';
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
  
  islogged: boolean = false;
  usuario: any = '';
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
