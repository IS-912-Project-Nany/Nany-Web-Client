import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; //FontAwesome
import { CookieService } from 'ngx-cookie-service'; //Cookie Service
import { NgxSpinnerModule } from "ngx-spinner"; //Ngx Spinner
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Animations Angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductosComponent } from './productos/productos.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MapComponent } from './map/map.component';
import { ButtonAddProductoComponent } from './productos/button-add-producto/button-add-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    LandingPageComponent,
    CategoriasComponent,
    EmpresasComponent,
    PerfilComponent,
    RegistroComponent,
    ProductosComponent,
    CheckoutComponent,
    MapComponent,
    ButtonAddProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
